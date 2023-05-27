import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import ImageUpload from './ImageUpload';
const Navbar = ({images, setSearchedImage}) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleOnLogOut = (e) => {
        e.preventDefault();
        if (typeof window != undefined) {
            if (localStorage.getItem('authtoken')) {
                localStorage.removeItem('authtoken');
                setIsLoggedIn(false)
                router.push('/');
            }
        }
    }
    useEffect(() => {
        if (typeof window != undefined) {
            if (localStorage.getItem('authtoken')) {
                setIsLoggedIn(true);
            }
        }
    }, [isLoggedIn])
    let newImages = [];
    const [query, setQuery] = useState("");
    const captureQuery = (e) => {
      e.preventDefault();
      setQuery(e.target.value);
      console.log(query)
    };
    const handleOnSearch = (e) => {
      e.preventDefault();
      let queryArr = query.split(" ");
      console.log(queryArr)
      for (let wordOfQuery of queryArr) {
        for (let objectOfImage of images) {
          if (
            objectOfImage.name.toLowerCase().includes(wordOfQuery.toLowerCase())
          ) {
            newImages.push(objectOfImage);
          }
        }
      }
      const uniqueSearchImages = Array.from(new Set(newImages.map((a) => a.url))).map((url) => {
        return newImages.find((a) => a.url === url);
      }
      );
      setSearchedImage(uniqueSearchImages);
      router.push("/search");
    }
    return (
        <>
            <div className="navbar bg-base-100 border-b">
                <div className="flex-1">
                    <a className="px-4 font-bold normal-case text-xl">Photex</a>
                </div>
                <div className="flex-none gap-2">
                    {
                        isLoggedIn &&
                        <>
                            <form onSubmit={handleOnSearch} className="form-control flex items-center flex-row">
                                <input type="search"  onChange={captureQuery} placeholder="Search" className="input input-bordered focus:outline-none h-10 mx-2" />
                                <button className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </form>
                            <label htmlFor="my-modal-3" className="btn"><AiOutlineCloudUpload className='text-2xl' /></label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" onClick={()=>{if(typeof window!=undefined){window.location.reload()}}} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <ImageUpload/>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={`https://ui-avatars.com/api/?name=${localStorage.getItem('photex-name')}`} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><Link href="/dashboard">Gallery</Link></li>
                                    <li><a onClick={handleOnLogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </>
                    }
                    {
                        !isLoggedIn &&
                        <Link href="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar