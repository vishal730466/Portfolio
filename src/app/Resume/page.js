"use client"
import React, { useRef, useEffect } from 'react'

const Resume = () => {
  const pdfref=useRef()
  useEffect(() => {
    if (pdfref.current) {
      pdfref.current.style.transform = "scale(1)"; // Adjust scale factor as needed
      pdfref.current.style.transformOrigin = "top left";
    }
  }, []);
  return (
    <div style={{height:"90vh",width:"100vw"}}>
         
    </div>
  )
}

export default Resume