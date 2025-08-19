import './Home.css'
import React,{useState,useEffect} from 'react';
import Card from '../../components/Card/Card'
import Transaction from '../../components/Transactions/Transaction'
import Piecharts from '../../components/Piecharts';
import Modal from '../../components/Modal';
import BarChart from '../../components/BarChart'

const data = [
  { name: 'travel', value: 1000 },
  { name: 'Food', value: 500 },
  { name: 'Entertainment', value: 250 },
];

export default function Home(){
    const [balanceAmount,setBalanceAmount]=useState(0);
    const [expenseAmount,setExpenseAmount]=useState(0);
    const [transactionList,setTransactionList]=useState([]);
    //modals
    const [isOpenExpense,setIsOpenExpense]=useState(false);
    const [isOpenbalance,setIsOpenBalance]=useState(false);


    //mounting
    const [isMounted,setIsMounted]=useState(false);



    // useEffect(()=>,[])
    return (
        <div className='cardcontainer'>
            <h1 className='header'>Expense Tracker</h1>
            <div className='cardsection'>
              <Card 
              title="Wallet Balance"
              money="5000" 
              bttntxt="+ Add Income" />
               <Card 
              title="Expense Balance"
              money="5000" 
              bttntxt="+ Add Expense" />
              <Piecharts data={data}/>
            </div>
            <Transaction />
            <BarChart data={data} />
            <div>

            </div>
            
        </div>
    )
}