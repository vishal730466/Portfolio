"use client"

import React, { useEffect,useRef,useState } from 'react'

const Project = () => {
  const [width,setwidth]=useState(1000)


  useEffect(()=>{
    if(window){
     
      setwidth(window.innerWidth)
    }
  },[width])

  if (width>450) {
    
  return (
    <div className='project'>
      <div className='project1'>
         <iframe src="https://tic-tac-toe-lime-two.vercel.app/" height="85%" width="100%" ></iframe>
         <p>A classic two-player Tic-Tac-Toe game built with Next.js and hosted on Vercel. </p>
         
      </div>
      <div className='p1_description'>
          <div> IOT project  </div>
          <div className='gallery'>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          </div>
      </div>
    </div>
  )
  } else {
        return(<div className='mob_project1'>
                 
         <iframe src="https://tic-tac-toe-lime-two.vercel.app/" height="45%" width="100%" ></iframe>
         <p className='game_dis'>A classic two-player Tic-Tac-Toe game built with Next.js and hosted on Vercel. </p>
     

      <div className='mob_iot_project'>
          <p> IOT project  </p>
          <div className='gallery'>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          </div>
      </div>

        </div>
        )
  }
  
}

export default Project