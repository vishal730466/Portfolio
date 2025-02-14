"use client"
import React, { useState } from 'react'

const Skill = () => {
    const [val , setval]=useState(2)
    const reload =()=>{
        setval(val+1)
    }
  return (
    <div className='project'>
        <div className='skill'>
        <iframe key={val} src='https://3d-web-gilt.vercel.app/' height="90%" width="100%"></iframe>
        <button onClick={reload}>Reload</button>
        </div>

    </div>
  )
}

export default Skill