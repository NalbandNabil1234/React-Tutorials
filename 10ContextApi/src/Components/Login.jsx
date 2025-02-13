import React, { useContext, useState } from "react";
import userContext from "../ContextApi/userContext";
import Profile from "./Profile";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setData} = useContext(userContext)
    const handleClick = (e) => {
        e.preventDefault()
        setData({username, password})
    }
    return (
        <div className="w-fit p-16 rounded-3xl flex flex-col justify-center items-center text-white bg-blue-800 ">
            <h3 className="text-2xl">Login</h3>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="my-5 py-2 px-4 rounded-3xl text-black outline-none" type="text" placeholder="username" />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 py-2 px-4 rounded-3xl text-black outline-none" type="text" placeholder="password" />
            <button
                onClick={handleClick}
                className="bg-blue-600 py-2 px-4 rounded-3xl mb-5">Submit
            </button>
            <Profile />
        </div>
    )
}

export default Login