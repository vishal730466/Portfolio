"use client"
import React, { useState, useEffect } from 'react'
import "./skill_style.css"

const Skill = () => {
    const [width, setwidth] = useState(1000)
    const [active , setacitve]=useState("p")
    useEffect(() => {
        if (window) {
            setwidth(window.innerWidth)
        }
    }, [width])

    if (width > 450) {

        return (<div className='skill_container'>  
                <div className='heading'>
                    <div className={active=="p"?'box':"box1"} onClick={()=>setacitve("p")}>Programming languages</div>
                    <div className={active=="d"?'box':"box1"} onClick={()=>setacitve("d")}>Database</div>
                    <div className={active=="t"?'box':"box1"} onClick={()=>setacitve("t")}>Tools</div>
                </div>
                <div className={active=="p"?'progress_bars':"invisible"}>
                    
                    <div className='html_bar'>HTML
                        <div className='bar_background'>
                            <div className='html_bar_fill bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'>  CSS
                        <div className='bar_background'>
                            <div className='css_bar_fill bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'> Javascript
                        <div className='bar_background'>
                            <div className='javascript_bar_fill bar'></div>
                        </div>
                    </div>
                </div>
                <div className={active=="d"?'progress_bars':"invisible"}>
                    <div className='html_bar'>Mongodb
                        <div className='bar_background'>
                            <div className='mongodb_fill_bar bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'>Nextjs
                        <div className='bar_background'>
                            <div className='nextjs_fill_bar bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'>React (Javascript library)
                        <div className='bar_background'>
                            <div className='react_fill_bar bar'></div>
                        </div>
                    </div>
                </div>
                <div className={active=="t"?"progress_bars":"invisible"}>
                    <div className='html_bar'>Vercel
                        <div className='bar_background'>
                            <div className='vercel_fill_bar bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'>Github
                        <div className='bar_background'>
                            <div className='github_fill_bar bar'></div>
                        </div>
                    </div>
                    <div className='html_bar'>Git
                        <div className='bar_background'>
                            <div className='git_fill_bar bar'></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }else{
        return<div className='mob_skill'>
            <div className='mob_heading'>
                <div className={active=="p"?'mob_square':"square1"} onClick={()=>setacitve("p")}> Programming languages</div>
                <div className={active=="d"?'mob_square':"square1"} onClick={()=>{setacitve("d")}}> Database and framework</div>
                <div className={active=="t"?'mob_square':"square1"} onClick={()=>setacitve("t")}> Tools</div>
            </div>
            <div className='mob_bottom-container'>
                <div className={active=="p"?'mob_progress':"invisible"}>
                    <div className='mob_bar_con'>
                        HTML
                        <div className='mob_bar_background'>
                            <div className='mob_html_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        CSS
                        <div className='mob_bar_background'>
                            <div className='mob_css_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        Javascript
                        <div className='mob_bar_background'>
                            <div className='mob_javascript_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active=="d"?'mob_progress':"invisible"}>
                    <div className='mob_bar_con'>
                        Mongodb
                        <div className='mob_bar_background'>
                            <div className='mob_mongodb_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        Nextjs
                        <div className='mob_bar_background'>
                            <div className='mob_nextjs_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        React library
                        <div className='mob_bar_background'>
                            <div className='mob_react_fill mob_bar'> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active=="t"?'mob_progress':"invisible"}>
                    <div className='mob_bar_con'>
                        Vercel
                        <div className='mob_bar_background'>
                            <div className='vercel_fill_bar mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        Github
                        <div className='mob_bar_background'>
                            <div className='github_fill_bar mob_bar'> 
                            </div>
                        </div>
                    </div>
                    <div className='mob_bar_con'>
                        Git
                        <div className='mob_bar_background'>
                            <div className='git_fill_bar mob_bar'> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default Skill