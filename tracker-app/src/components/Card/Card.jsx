import React from 'react';
import './Card.css'

export default function Card({
    title,
    money,
    bttntxt,
}){
    return (
        // <>
        <div className='card'>
            <h3 className='cardTitle'>{`${title}:₹${money}`}</h3>
            <button type='button'>{bttntxt}</button>
        </div>

     
      
        
    )
}