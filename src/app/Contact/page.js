"use client"
import React, { useState, useEffect } from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiLinkedin } from "react-icons/tfi";
import "./style.css"

const Contact = () => {
    const [name, setname] = useState("")
    const [Email, setEmail] = useState("")
    const [message, setmessage] = useState("")

    const [width, setwidth] = useState(1000)
    useEffect(() => {
        if (window) {
            setwidth(window.innerWidth)
        }
    }, [width])

    const submit = async()=>{
        if (!name || !Email) {
            alert("Plese enter name and email")
        } else {
            if(Email.includes("@") && Email.includes("gmail")){
                let result = await fetch("/api/contact",{
                    method:"POST",
                    body:JSON.stringify({name, Email, message})
                })
               let response = await result.json()
                // alert(response)
                if(response){
                    // console.log(response)
                    console.log("Thank you ",response.result1.name);
                    alert("Thank you! Your message has been sent successfully ")
                }else{
                    alert("Something went wrong , please try again later")
                }
            }else{
                alert("Email not valid")
            }
            
        }
        

    }

    if (width > 450) {


        return (
            <div className='container'>
                <div className='message_container'>
                    <input className='name' type='text' placeholder='Enter name' value={name} onChange={((e) => setname(e.target.value))}></input>
                    <input className='name' type='text' placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className='message' type='text' placeholder='Enter message' value={message} onChange={(e) => setmessage(e.target.value)}></input>
                    <button className='btn' onClick={submit}>Send</button>
                </div>
                <div className='icons'>
                    <a href='tel:+917304669130'>  <FaPhone style={{ fontSize: "10vh" }} />  </a>
                    <a target='_blank' href='mailto:vishalingle98765@gmail.com' ><MdEmail style={{ fontSize: "10vh" }} /> </a>
                    <a target='_blank' href='https://www.linkedin.com/in/vishal-ingle-298921335/ '> <TfiLinkedin style={{ fontSize: "10vh" }} /> </a>
                </div>
            </div>
        )
    } else {
        return <div className='mob_container'>
            <div className='mob_message_container'>
                <input className='mob_name' type='text' placeholder='Enter name' value={name} onChange={((e) => setname(e.target.value))}></input>
                <input className='mob_name' type='text' placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='mob_message' type='text' placeholder='Enter message' value={message} onChange={(e) => setmessage(e.target.value)}></input>
                <button className='mob_btn' onClick={submit}>Send</button>
            </div>
            <div className='mob_icons'>
                <a href='tel:+917304669130'> <FaPhone style={{ fontSize: "10vw" }} /> </a>
                <a href='mailto:vishalingle98765@gmail.com'>   <MdEmail style={{ fontSize: "10vw" }} />    </a>
                <a target='_blank' href='https://www.linkedin.com/in/vishal-ingle-298921335/ '> <TfiLinkedin style={{ fontSize: "10vw" }} /> </a>
            </div>
        </div>
    }
}


export default Contact