import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
    const route = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userData,setUserData]=useState({});

    function OnFormSubmit(e)
    {
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        });
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img src='./Uber_logo.png' alt='uber_logo' className='w-16 mb-10' />
                <form onSubmit={OnFormSubmit}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input type='email' placeholder='email@example.com' className='bg-[#eeeeee] mb-7 px-4 py-2 text-lg placeholder:text-base rounded w-full border' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input type='password' placeholder='password' className='bg-[#eeeeee] mb-7  px-4 py-2 text-lg placeholder:text-base rounded w-full border' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className='bg-[#111] font-medium text-white rounded mb-3 px-4 py-2 text-lg w-full'>Login</button>
                </form>
                <p className='text-center font-medium'>New here? <button className='text-blue-500 font-medium ' onClick={() => route("/signup")}>Create new account</button></p>
            </div>
            <div>
                <button className='bg-[#10b461] font-medium text-white rounded mb-5 px-4 py-2 text-lg w-full' onClick={() => route("/captain-login")}>Sign in as Captain</button>
            </div>
        </div>
    )
}

export default UserLogin
