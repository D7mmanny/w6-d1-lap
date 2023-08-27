import React ,{useEffect,useState}from 'react'
import {Link} from 'react-router-dom'

type info={
    id:number;
    name:string;
    image:string
}

function Apibu() {
const [asrc,setsrc] =useState<info[]>([])

     useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/`)
        .then((response) => response.json())
        .then((data) => setsrc(data.results));
       
      
     },[])

  return (
    <div>
        <div className='grid grid-cols-4'>
      {asrc.map((item)=>{
        return(
            
            <div  key={item.id}>
                <Link to={`/CharDetails/${item.id}`}>
                    <img src={item.image}  />
                </Link>
            </div>
            
        )


      })}
   </div>
    </div>
  )
}

export default Apibu