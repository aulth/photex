import React, {useState, useEffect} from 'react'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {FiUser} from 'react-icons/fi'
import {RiLockPasswordLine} from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Register = () => {
    const router = useRouter();
    const [data, setData] = useState({name:'', email:'', password:''});
    const [processing, setProcessing] = useState(false)
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }
    useEffect(() => {
        if (typeof window != undefined) {
            if (localStorage.getItem('authtoken')) {
                router.push('/dashboard')
            }
        }
    }, [])
    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        if(!data.name){
            return toast.error("Enter the name");
        }
        if(!data.email){
            return toast.error("Enter the email");
        }
        if(!data.password){
            return toast.error("Enter the password");
        }
        setProcessing(true)
        const response = await fetch('/api/signup', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name:data.name, email:data.email, password:data.password})
        })
        const json = await response.json();
        if(!json.success){
           toast.error(json.msg)
           setProcessing(false)
            return;
        }
        if(typeof window!=='undefined'){
            localStorage.setItem('authtoken', json.authtoken);
            localStorage.setItem('photex-name', json.name);
            toast.success("Login successful")
            setProcessing(false)
            setTimeout(() => {
                window.location.href = 'https://mohd-usman-dobby.vercel.app/'
            }, 1000);
            return;
        }
    }
  return (
    <>
    <Toaster position='top-right' />
    <h3 className="text-2xl font-bold text-center">Welcome to <b>Photex</b>!</h3>
            <p className='text-center'>Create an account</p>
            <form onSubmit={handleOnSubmit} className="w-full flex flex-col gap-0">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span className="label-text"><MdOutlineAlternateEmail /></span>
                        <input required type="email" onChange={handleOnChange} name='email' placeholder="usman@gmail.com" className="input w-full focus:outline-none input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span><FiUser /></span>
                        <input type="text" onChange={handleOnChange} name='name'  placeholder="Mohd Usman" className="input w-full focus:outline-none input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <label className="input-group">
                        <span><RiLockPasswordLine /></span>
                        <input  onChange={handleOnChange} name='password'  type="password" placeholder="*****" className="input w-full focus:outline-none input-bordered" />
                        <span className='cursor-pointer'>Reset</span>
                    </label>
                </div>
                <button type='submit' className={`btn ${processing?'loading':''} w-full mt-4`}>Register</button>
                <p className="text-center mt-4">New member? Register <Link href="/login" className='underline'>here</Link></p>                
            </form>
    </>
  )
}

export default Register