import React,{useState} from 'react';


export default  function BalanceForm(){
    const [income,setIncome]=useState("")
    return (
        <div className='balanceForm'>
            <h3>Add Balance</h3>
            <form>
                <input
                type="Number"
                placeholder="Income Amount"
                value={income}
                onChange={(e)=>setIncome(e.target.value)}
                required />
                <button>Add Balance</button>
                <button>Cancel</button>
                </form> 
            </div>
    )
}