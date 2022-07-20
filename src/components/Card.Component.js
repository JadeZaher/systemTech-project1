import React, {useState} from 'react'

export default function Card({cardContent, cardI, listI, next, back}) {

  
  return (
    <div className='Card'>
    <button onClick={()=>back(cardI, listI)}>back</button>
      <p>{cardContent}</p>
    <button onClick={()=>next(cardI, listI)}>next</button>
    </div>
  )
}
