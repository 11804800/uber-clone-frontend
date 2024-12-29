import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const route=useNavigate();

  return (
    <div>
      <div className='w-full pt-8 h-screen flex justify-between flex-col'>
        <img src='./Uber_logo.png' alt='uber_logo' className='w-16 ml-8'/>
        <div className='bg-white px-4 py-5 w-full pb-8'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <button onClick={()=>route("/login")} className='bg-black rounded-md text-white py-3 mt-6 font-medium w-full'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Home
