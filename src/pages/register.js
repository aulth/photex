import React from 'react'
import Register from '../../components/Register'
import Navbar from '../../components/Navbar'

const register = () => {
  return (
    <>
    <div className="w-full bg-base-100 pt-4">
    <div className="max-w-md mx-auto border rounded drop-shadow-sm p-4">
        <Register />
    </div>
    </div>
    </>
  )
}

export default register