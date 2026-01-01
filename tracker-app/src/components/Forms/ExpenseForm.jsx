import React,{useState} from 'react';

export default function ExpenseForm({onSubmit,onCancel}){
    const [spendValue,setSpendValue]=useState("");
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("");
    const [date,setDate]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(onSubmit){    
            const expenseData={
                title,
                price:Number(spendValue),
                category:category.toLowerCase(),
                date,
            };
            onSubmit(expenseData);

      setTitle("");
      setSpendValue("");
      setCategory("");
      setDate("");

        }
    };

    
    return (
        <div>

            <h3>Add Expense</h3>
            <form onSubmit={handleSubmit}>

                <input 
                name='title'
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                />

                <input 
                name='price'
                type="number"
                placeholder="price"
                value={spendValue}
                onChange={(e)=>setSpendValue(e.target.value)}
                min="0"
                step="any"
                required
                />

                <select
                name="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                required >
                    <option value="" disabled>Select Category</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="entertainment">Entertainment</option>
                </select>

                <input
                type="date"
                name="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)} 
                required
                />
                <button type='submit'>Add Expense</button>
                <button type="button" onClick={onCancel} >Cancel</button>
                </form>
        </div>

    )
}