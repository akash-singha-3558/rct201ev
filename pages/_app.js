import '../styles/globals.css'
import Link from "next/link";
export default function App({ Component, pageProps }) {
  return (
    <>
    <div style={{display:"flex",width:"100%",color:"white",fontSize:"18px" ,justifyContent:"space-around",alignItems:"center",h:"58px",border:"1px solid white", fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
      <div style={{h:"100%", w:"58px"}}> <img style={{width:"58px",height:"100%"}} src="https://akash-singha-3558.github.io/static/media/logo.eef3e0aa7055d3a9f16a.png"/></div>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Expericence</Link>
     </div>
     <Component {...pageProps} />
    </>
  ) 
}
