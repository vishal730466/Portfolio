"use client"
import React, { useEffect,useRef,useState } from 'react'

const Navbar = () => {
  const [width,setwidth]=useState(1000)
  useEffect(()=>{
    if(window){
     
      setwidth(window.innerWidth)
    }
  },[width])

  if (width>400) {
    return (
      <div className='nav'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Resume</li>
      </div>
    )
  } else {
     return(<div>
        <div className='mob_nav'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Resume</li>
      </div>
     </div>

     )
  }
 
}

export default Navbar