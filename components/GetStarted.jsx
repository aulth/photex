import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'
const GetStarted = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
            {
                login?
                <Login setLogin={setLogin}/>:
                <Register setLogin={setLogin}/>
            }
        </>
    )
}

export default GetStarted