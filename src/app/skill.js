"use client"
import React, { useState,useEffect } from 'react'

const Skill = () => {
    const [val , setval]=useState(2)
    const [width,setwidth]=useState(1000)
    useEffect(()=>{
    if(window){
     
      setwidth(window.innerWidth)
    }
  },[width])

    const reload =()=>{
        setval(val+1)
    }

    if (width >450) {
      return (
        <div className='threedskill'>
            <div className='skill'>
            <iframe key={val} src='https://3d-web-gilt.vercel.app/' height="90%" width="100%"></iframe>
            <button onClick={reload}>Reload</button>
            </div>
        </div>
      )    
    } else {
      return<div className='mob_skill'>
          {/* <div> */}
          <iframe key={val} src='https://3d-web-gilt.vercel.app/' height="70%" width="100%" ></iframe>
            <button onClick={reload}>Reload</button>
          {/* </div> */}

      </div>
    }
  
}

export default Skill