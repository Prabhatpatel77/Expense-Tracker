import React from 'react';
import './Card.css'

export default function Card(){
    return (
        <>
        <div className='cards'>
            <h3>Wallet Wallence:5000</h3>
            <button type='button'>+Add Income</button>
        </div>
        <div className='cards'>
<h3>Expenses:500</h3>
<button type='button'>+Add Expense</button>
        </div>
        </>
        
    )
}