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
         <p>A two-player Tic-Tac-Toe game built with Next.js and hosted on Vercel. </p>
         
      </div>
      <div className='iot_project'>
          <div> IOT project  </div>
          <div className='gallery'>
          <img src='car.jpg' height="48%" width="45%"></img>
          <img src='car2.jpg' height="48%" width="45%"></img>
          <img src='car3.jpg' height="48%" width="45%"></img>
          <img src='car.jpg' height="48%" width="45%"></img>
          </div>
              A remote-controlled car that can be operated via a mobile device.
      </div>
    </div>
  )
  } else {
        return(<div className='mob_project_page1'>
                 <div className='mob_tic_tac_toe'>
         <iframe src="https://tic-tac-toe-lime-two.vercel.app/" height="85%" width="100%" ></iframe>
         <p className='game_dis'>A two-player Tic-Tac-Toe game built with Next.js and hosted on Vercel. </p>
                 </div>
     

      <div className='mob_iot_project'>
          <p> IOT project  </p>
          <div className='gallery'>
          <img src='car.jpg' height="50%" width="50%"></img>
          <img src='car2.jpg' height="50%" width="50%"></img>
          <img src='car3.jpg' height="50%" width="50%"></img>
          <img src='car.jpg' height="50%" width="50%"></img>
          </div>
          
         <div className='my_iot_p'>  A remote-controlled car that can be operated via a mobile device. </div>
      </div>

        </div>
        )
  }
  
}

export default Project