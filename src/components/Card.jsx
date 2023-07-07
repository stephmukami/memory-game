import React from 'react'
export default function Card({id,title,image,handleGamePlay}){

    return(
        <>
        <div className='child-container'>
        <div className='card' onClick={()=>handleGamePlay(id)}>
                    <img src= {image} alt="image of a fruit" />
                    <h6 className='fruit-title'>{ title}</h6>
            </div>
        </div>
        
           
        
           
       </>
    )
}