"use client"
import Link from 'next/link'
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
      <Link href="/"><li>Home</li></Link>
      <Link href="/Contact"><li>Contact</li></Link>
         <Link href="/Myskill">  <li>Skills</li> </Link>
          {/* <li>Resume</li> */}
      </div>
    )
  } else {
     return(<div>
        <div className='mob_nav'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
          <Link href="/Myskill"><li>Skills</li></Link>
          {/* <li>Resume</li> */}
      </div>
     </div>

     )
  }
 
}

export default Navbar