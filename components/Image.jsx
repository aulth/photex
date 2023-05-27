import React, { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineShareAlt, AiOutlineDelete } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';

const Image = ({ data }) => {
    const [mouseEntered, setMouseEntered] = useState(false)
    const router = useRouter();
    const viewImage = () => {
        document.getElementById(data.url).classList.remove("hidden");
    }
    const closeImage = () => {
        document.getElementById(data.url).classList.add("hidden");
    }
    useEffect(() => {
        if (typeof window != undefined) {
            if (!localStorage.getItem('authtoken')) {
                router.push('/');
            }
        }
    }, [])
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    function shareImage(imageUrl) {
        if (!navigator.share || !navigator.canShare) {
            console.log("Web Share API not supported in this browser.");
            return;
        }

        fetch(imageUrl)
            .then(response => response.blob())
            .then(imageBlob => {
                const file = new File([imageBlob], data.name, { type: imageBlob.type });
                const filesArray = [file];

                if (navigator.canShare({ files: filesArray })) {
                    navigator.share({
                        files: filesArray,
                        title: data.name
                    })
                        .then(() => console.log("Image shared successfully."))
                        .catch(error => console.log("Error sharing image:", error));
                } else {
                    console.log("Sharing files not supported in this browser.");
                }
            })
            .catch(error => console.log("Error fetching image:", error));
    }

    const handleOnDelete = async () => {
        if (typeof window != undefined) {
            const response = await fetch('/api/delete', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ imageId: data._id, authtoken: localStorage.getItem('authtoken') })
            })
            const json = await response.json();
            if (json.success) {
                toast.success(json.msg);
                location.reload();
            }
        }
    }
    return (
        <>
            <Toaster position='top-right' />
            <div onMouseEnter={() => { setMouseEntered(true) }} onMouseLeave={() => { setMouseEntered(false) }} className="aspect-video card rounded-none">
                <div className="aspect-video w-full bg-gray-500 absolute opacity-50 top-0 flex justify-center items-center">
                    {
                        mouseEntered &&
                        <>
                            <div className="btn-group bg-gray-300 rounded-lg z-20">
                                <button onClick={viewImage} className="btn btn-sm"><AiOutlineEye className='text-white' /></button>
                                <button onClick={() => { shareImage(data.url) }} className="btn btn-sm"><AiOutlineShareAlt className='text-white' /></button>
                                <button onClick={handleOnDelete} className="btn btn-sm"><AiOutlineDelete className='text-white' /></button>
                            </div>
                            <h3 className="font-semibold cursor-default text-left overflow-x-hidden absolute bottom-0 left-0 text-white p-2">{data.name}</h3>
                            <span className="absolute bottom-0 right-0 text-sm p-2 text-white">{getFormattedDate(data.createdAt)}</span>
                        </>
                    }
                </div>
                <img src={data.url} className='object-cover aspect-video' alt="" />
            </div>
            <div id={data.url} className="w-full z-30 hidden flex justify-center items-center  h-screen overflow-x-hidden bg-gray-600 absolute top-0 left-0">
                <button onClick={closeImage} className="btn btn-circle btn-sm  absolute top-2 right-2"><IoCloseOutline /></button>
                <img src={data.url} id={data.url} className='w-full object-contain' alt="" />
            </div>
        </>
    )
}

export default Image