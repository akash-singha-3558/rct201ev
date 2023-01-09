import Head from 'next/head'
import Box from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useState } from 'react';


export default function Home() {
  const [text,SetText]=useState("Follow")
  return (
    <>
      <Head>
        <title>Akash Singha Portfolio</title>
      </Head>
     
<div style={{width:"90%", display:"flex",margin:"auto",marginTop:"40px",justifyContent:"space-between",height:"600px",borderRadius:"15px"}}>
<div style={{width:"40%",height:"100%",border:"1px solid white",padding:"10px"}}>
<img src="https://avatars.githubusercontent.com/u/112806398?v=4" alt="pic" style={{height:"240px",width:"240px",display:"block",margin:"auto",borderRadius:"50%"}}/>
<h2 style={{textAlign:"center"}}>Akash Singha</h2>
<div style={{width:"60%",display:"block",margin:"auto",marginTop:"10px"}}>
<p style={{textAlign:"center"}}>Full-stack Developer |JavaScript | Typescript | ReactJS | NextJs | HTML | CSS | Chakra-UI | </p>

</div>
<div style={{display:"flex",margin:"auto",justifyContent:"center",alignItems:"center",width:"25%"}}>
<Link href="https://drive.google.com/file/d/1pRmYvib37ALHPrSjGKt6d6_XgbQEERK3/view"><button style={{display:"block",margin:"auto",marginTop:"10px",border:"none",backgroundColor:"teal",padding:"10px",borderRadius:"15px"}}>Resume</button></Link>
<button style={{display:"block",margin:"auto",marginTop:"10px",border:"none",backgroundColor:"teal",padding:"10px",borderRadius:"10px"}} onClick={()=>{
  SetText(text==="Follow"?"Following":"Follow");
}}>{text}</button>
</div>
<div style={{width:"80%",margin:"auto",marginTop:"10px",fontSize:"20px"}}>

<p>A tech-enthusiast, with 1000+ hours of hands-on coding & project experience in developing websites and has a robust problem-solving mindset which enables him to improve the performance, scalability, and reliability of any project assigned him.</p>
</div>
</div>

<div style={{width:"55%",textAlign:"left",border:"1px solid white",borderRadius:"15px",display:"grid",padding:"10px"}}>
<h1 style={{marginLeft:"20px"}}>Education</h1>
<h3 style={{marginLeft:"20px"}}>Full Stack Webdevelopment | Full Time</h3>
<p style={{marginLeft:"20px"}}>Masai School</p>
<p style={{marginLeft:"20px"}}>July 2022-Present</p>

<h3 style={{marginLeft:"20px",marginTop:"10px"}}>B.Tech | Electronics & Communication Engineering</h3>
<p style={{marginLeft:"20px"}}>Cooch Behar Government Engineering College</p>
<p style={{marginLeft:"20px"}}>June 2018-July 2022</p>

<h1 style={{marginLeft:"20px"}}>Experience</h1>
<h3 style={{marginLeft:"20px"}}>Industrial Training In Signal & System And Telecommunication In Indian Railway</h3>
<p style={{marginLeft:"20px"}}>November 2021-January 2022</p>
</div>
</div>

    </>
  )
}
