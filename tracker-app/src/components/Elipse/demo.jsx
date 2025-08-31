import './Home.css'
import React,{useState,useEffect} from 'react';
import Card from '../../components/Card/Card'
import TransactionList from "../../components/TransactionList/TransactionList"
import Piecharts from '../../components/Piecharts';
import Modal from '../../components/Modal';
import BalanceForm from '../../components/Forms/BalanceForm'
import ExpenseForm from '../../components/Forms/ExpenseForm'
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
    const [isOpenBalance,setIsOpenBalance]=useState(false);

const [isOpen,setIsOpen]=useState(false)
    //mounting
    const [isMounted,setIsMounted]=useState(false);



    useEffect(()=>{
      const localBalance=localStorage.getItem("balance")
    },[])
    return (
        <div className='cardcontainer'>
            <h1 className='header'>Expense Tracker</h1>
            <div className='cardsection'>
              <Card 
              title="Wallet Balance"
              money="5000" 
              bttntxt="+ Add Income"
              handleClick={()=>{
                setIsOpenBalance(true)
                setIsOpen(true)
              }} />
               <Card 
              title="Expense Balance"
              money="5000" 
              bttntxt="+ Add Expense" 
              handleClick={()=>{
                setIsOpenExpense(true)
                setIsOpen(true)
              }} />
              <Piecharts data={data}/>
            </div>
          
            <div className='expensepart'>
            <TransactionList
          transactions={transactionList}
          editTransactions={setTransactionList}
          title="Recent Transactions"
          balanceAmount={balanceAmount}
          setBalanceAmount={setBalanceAmount}
        />
            <BarChart data={data} />
            </div>
              <Modal
        isOpen={isOpenBalance}
        setIsOpen={setIsOpenBalance}
       
      >
        <BalanceForm />
        
      </Modal>
      <Modal 
      isOpen={isOpenExpense}
      setIsOpen={setIsOpenExpense}>
        <ExpenseForm />
      </Modal>
        </div>
    )
}