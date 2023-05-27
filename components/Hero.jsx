import React from 'react'
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1519284053930-16dfacdc7c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold  overflow-y-hidden">Secure. Preserve.</h1>
                        <p className="mb-5">Photex is your trusted personal image storage solution. Safeguard and access your cherished memories effortlessly. Secure, reliable, and available on-the-go.</p>
                        <label htmlFor='my-modal-3' className="btn btn-primary">Get Started</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero