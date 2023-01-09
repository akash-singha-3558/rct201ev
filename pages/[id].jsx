import Link from "next/link";
const Project=({data,id})=>{
    let find;
    for(let ele of data.items)
    {
        if(ele.id==id){
            find=ele;
           
        }
        
    }
console.log(find)
return(
<div style={{marginTop:"40px",width:"90%",margin:"auto",height:"500px"}}>
<h1 style={{textAlign:"center",marginTop:"10px"}}>Projects</h1>
<div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"20px"}}>


   
        
        <div key={find.id} style={{border:"1px solid white",padding:"10px",height:"240px",margin:"auto",fontSize:"25px"}}>
        <p>Repo Name :{find.full_name}</p>
        <p>Project Name : {find.name}</p>
        <p>Visibility: {find.visibility}</p>
         <p>Forks : {find.forks_count}</p>
         <p>Language: {find.language}</p>
         <p>Stars Count : 0</p>
        
        </div>
        
  
</div>

</div>


)

}

export async function getStaticProps(context) {
    let id=context.params.id.toString();
    const res = await fetch(`https://api.github.com/search/repositories?q=user:akash-singha-3558+fork:true&sort=updated&per_page=10&type=Repositories/${id}`)
    const data = await res.json()
    return {
      props: {
        data,
        id
      }, // will be passed to the page component as props
    }
  }





export async function getStaticPaths() {
    const res = await fetch(`https://api.github.com/search/repositories?q=user:akash-singha-3558+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
     
    return {
      paths: data.items.map((el)=>({
        params:{id:(el.id.toString())}
      })) ,
      fallback: false, // can also be true or 'blocking'
    }
  }







export default Project;