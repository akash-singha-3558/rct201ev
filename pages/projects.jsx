import Link from "next/link";
const Project=({data})=>{
console.log(data.items)
return(
<div style={{marginTop:"40px",width:"90%",margin:"auto",height:"500px"}}>
<h1 style={{textAlign:"center",marginTop:"10px"}}>Projects</h1>
<div style={{display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",marginTop:"20px"}}>

{
    data.items.map((el)=>(
        <>
        <div key={el.id} style={{border:"1px solid white",padding:"10px"}}>
            <p>Name : {el.full_name}</p>
         <p>Forks : {el.forks_count}</p>
         <p>Language: {el.language}</p>
         <p>Stars Count : 0</p>
         <Link href={el.id.toString()}><button style={{cursor:"pointer"}}>Visit Repo</button></Link>
        </div>
        </>
    ))
}
</div>

</div>


)

}

//https://api.github.com/search/repositories?q=user:akash-singha-3558+fork:true&sort=updated&per_page=10&type=Repositories


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/search/repositories?q=user:akash-singha-3558+fork:true&sort=updated&per_page=10&type=Repositories`)
   const data = await res.json()
    
    // Pass data to the page via props
    return { props: { data } }
  }



export default Project