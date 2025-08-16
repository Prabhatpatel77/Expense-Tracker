import './Home.css'
import React from 'react';
import Card from '../../components/Card/Card'
import Piecharts from '../../components/Piecharts'



export default function Home(){
    return (
        <div className='home'>
            <h1>Expense Tracker</h1>
            <div className='cardsection'>
              <Card />
            </div>
            
            <div></div>
            <Piecharts />
        </div>
    )
}