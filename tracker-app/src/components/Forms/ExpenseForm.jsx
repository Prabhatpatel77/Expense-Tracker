import React,{useState} from 'react';

export default function ExpenseForm(){
    const [spendValue,setSpendValue]=useState("")
    const [title,setTitle]=useState("")
    return (
        <div>
            <h3>Add Expense</h3>
            <form>
                <input 
                type="text"
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                />
                <input 
                type="number"
                placeholder="price"
                value={spendValue}
                onChange={(e)=>setSpendValue(e.target.value)}
                required

                />
                <select
                name="category"
                // value={}
                // onChange={}
                required >
                    <option value="" disabled>Select Categor</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <input
                type="date"
                name="date" />
                <button>Add Expense</button>
                <button>Cancel</button>
                </form>
        </div>

    )
}