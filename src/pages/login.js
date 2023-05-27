import React from 'react'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const login = () => {
  return (
    <>
    <div className="w-full bg-base-100 pt-4">
    <div className="max-w-md mx-auto border rounded drop-shadow-sm p-4">
        <Login />
    </div>
    </div>
    </>
  )
}

export default login