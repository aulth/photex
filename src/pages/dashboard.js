import React, {useEffect} from 'react'
import Image from '../../components/Image'
import { useRouter } from 'next/router'
const page = ({images}) => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window != undefined) {
            if (!localStorage.getItem('authtoken')) {
                router.push('/login')
            }
        }
    }, [])
    return (
        <>
            <hr />
            <div className="w-full bg-white">
            <div className="container mx-auto grid grid-cols-4 gap-1 grid-rows-1 bg-base-100 p-4">
                {
                    images && images.length>0 && images.map((item,index)=>{
                        return <Image data={item} key={index} />
                    })
                }
            </div>
            </div>
        </>
    )
}

export default page