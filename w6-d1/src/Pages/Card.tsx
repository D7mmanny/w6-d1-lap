import React from 'react'
import {useParams} from 'react-router-dom'


type info={
    id:number;
    name:string;
    image:string;
    status:string;
    gender:string
}
function Card() {
const {id}=useParams();
const [char,setChar]=React.useState<info[]>([])

React.useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => setChar([data]));
   
  
 },[])



  return (
    <div className='dd' >
          {char.map((item)=>{
        return(
            <div  key={item.id}>
                <img src={item.image} alt='Character' />
                <p>{item.name}</p>
                <p>{item.status}</p>
                <p>{item.gender}</p>
            </div>
        )


      })}



    </div>
  )
}

export default Card