import React, { useState } from 'react';
import './BalanceForm.css'; // Import your CSS file!

export default function BalanceForm({ onCancel, onSubmit }) {
  const [income, setIncome] = useState("");

  // Optional: You can handle form submission and cancel events here
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(income);
    setIncome(""); // clear input after submit if needed
  };

  return (
    <div className="balanceForm">
      <h3 className="formHeading">Add Balance</h3>
      <form onSubmit={handleSubmit} className="formContent">
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
          className="formInput"
        />
        <button type="submit" className="primaryBtn">Add Balance</button>
        <button 
          type="button" 
          className="cancelBtn"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
