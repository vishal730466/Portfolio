"use client"
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef,useState } from 'react'

const Homepage = () => {
  const [width,setwidth]=useState(1000)
  const conRef = useRef("")

  let  handleScroll =()=>{
    window.scrollBy({ top: 633 , behavior: "smooth" });
  }
  
  useEffect(()=>{
    if(window){
     
      setwidth(window.innerWidth)
    }
  },[width])

   if (width > 450) {
    return (
      <div className='myhomepage' onClick={handleScroll}> 
          <pre >
             Hi, My name is
             <p> Vishal Ingle</p> 
          </pre>
          <div className='myImage'>
            <img height="100%" width="100%" src="vishal.jpg" alt='img'/>
           
          </div>
      </div>
    )
   } else {
      return(<div className='myhomepage'>
    
          <pre className='h_mob'>
             Hi, My name is
             <p> Vishal Ingle</p> 
          </pre>
          <div className='myImage'>
            <img height="100%" width="100%" src="vishal.jpg" alt='img'/>     
          </div>
         </div>

      )
   }
  
}

export default Homepage