import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Image from '../../components/Image'
import { useRouter } from 'next/router'
const page = ({ a }) => {
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
            <div className="w-full bg-white">
            <div className="container mx-auto grid grid-cols-4 gap-1 grid-rows-1 bg-base-100 p-4">
                {
                    a && a.length>0 && a.map((item,index)=>{
                        return <Image data={item} key={index} />
                    })
                }
            </div>
            </div>
            {/* {
                a && console.log(JSON.stringify(a))
            } */}
        </>
    )
}

export default page