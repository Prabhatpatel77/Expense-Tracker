import "./Home.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import TransactionList from "../../components/TransactionList/TransactionList";
import PieChart from "../../components/Piecharts";
import BarChart from "../../components/BarChart";
import Modal from "../../components/Modal";
import BalanceForm from "../../components/Forms/BalanceForm";
import ExpenseForm from "../../components/Forms/ExpenseForm";

export default function Home() {
  
  const [wallet, setWallet] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [records, setRecords] = useState([]);

  // category-wise values
  const [categoryTotals, setCategoryTotals] = useState({
    food: 0,
    travel: 0,
    entertainment: 0,
  });
  const [categoryCounts, setCategoryCounts] = useState({
    food: 0,
    travel: 0,
    entertainment: 0,
  });

  // modal flags
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);

  const [mounted, setMounted] = useState(false);

  // first render → load from localStorage
  // useEffect(() => {
  //   const savedBalance = localStorage.getItem("balance");
  //   if (savedBalance) {
  //     setWallet(Number(savedBalance));
  //   } else {
  //     setWallet(5000);
  //     localStorage.setItem("balance", 5000);
  //   }

  //   const savedExpenseList = JSON.parse(localStorage.getItem("expenses"));
  //   setRecords(savedExpenseList || []);

  //   setMounted(true);
  // }, []);
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setWallet(Number(savedBalance));
    } else {
      // Keep initial wallet balance as 5000 (as asked)
      setWallet(5000);
      localStorage.setItem("balance", 5000);
    }
    // Improved: try-catch to handle invalid JSON in 'expenses'
    try {
      const savedExpenseListRaw = localStorage.getItem("expenses");
      const savedExpenseList = savedExpenseListRaw ? JSON.parse(savedExpenseListRaw) : [];
      if (Array.isArray(savedExpenseList)) {
        setRecords(savedExpenseList);
      } else {
        setRecords([]);
      }
    } catch (error) {
      console.error("Failed to parse expenses from localStorage:", error);
      setRecords([]);
    }

    setMounted(true);
  }, []);
  //changes
    const aggregateCategories = (records) => {
    return records.reduce(
      (acc, record) => {
        const { category, price } = record;
        const priceNum = Number(price) || 0;
        if (category && acc.categoryTotals.hasOwnProperty(category)) {
          acc.categoryTotals[category] += priceNum;
          acc.categoryCounts[category] += 1;
        }
        return acc;
      },
      {
        categoryTotals: { food: 0, travel: 0, entertainment: 0 },
        categoryCounts: { food: 0, travel: 0, entertainment: 0 },
      }
    );
  };
//changes second try
useEffect(() => {
    if (records.length > 0 || mounted) {
      localStorage.setItem("expenses", JSON.stringify(records));
    }

    if (records.length > 0) {
      const total = records.reduce((acc, curr) => acc + Number(curr.price || 0), 0);
      setTotalExpense(total);
    } else {
      setTotalExpense(0);
    }
    // Use utility function to aggregate category totals and counts
    const { categoryTotals, categoryCounts } = aggregateCategories(records);

    setCategoryTotals(categoryTotals);
    setCategoryCounts(categoryCounts);
  }, [records]);

  // update when expense list changes
  // useEffect(() => {
  //   if (records.length > 0 || mounted) {
  //     localStorage.setItem("expenses", JSON.stringify(records));
  //   }

  //   if (records.length > 0) {
  //     const total = records.reduce(
  //       (acc, curr) => acc + Number(curr.price),
  //       0
  //     );
  //     setTotalExpense(total);
  //   } else {
  //     setTotalExpense(0);
  //   }

  //   let foodSum = 0,
  //     foodCnt = 0,
  //     entSum = 0,
  //     entCnt = 0,
  //     travelSum = 0,
  //     travelCnt = 0;

  //   records.forEach((record) => {
  //     if (record.category === "food") {
  //       foodSum += Number(record.price);
  //       foodCnt++;
  //     } else if (record.category === "entertainment") {
  //       entSum += Number(record.price);
  //       entCnt++;
  //     } else if (record.category === "travel") {
  //       travelSum += Number(record.price);
  //       travelCnt++;
  //     }
  //   });

  //   setCategoryTotals({
  //     food: foodSum,
  //     entertainment: entSum,
  //     travel: travelSum,
  //   });

  //   setCategoryCounts({
  //     food: foodCnt,
  //     entertainment: entCnt,
  //     travel: travelCnt,
  //   });
  // }, [records]);

  // update localStorage whenever balance changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("balance", wallet);
    }
  }, [wallet]);

  return (
    <div className="cardcontainer">
      <h1 className="header">Expense Tracker</h1>

     
      <div className="cardsection">
        <Card
          title="Wallet Balance"
          money={wallet}
          bttntxt="+ Add Income"
          buttonType="success"
          handleClick={() => setShowBalanceModal(true)}
        />

        <Card
          title="Total Expenses"
          money={totalExpense}
          bttntxt="+ Add Expense"
          buttonType="failure"
          handleClick={() => setShowExpenseModal(true)}
        />

        <PieChart
          data={[
            { name: "Food", value: categoryTotals.food },
            { name: "Entertainment", value: categoryTotals.entertainment },
            { name: "Travel", value: categoryTotals.travel },
          ]}
        />
      </div>

      {/* Transactions + Bar Graph */}
      <div className="expensepart">
        <TransactionList
          transactions={records}
          editTransactions={setRecords}
          title="Recent Transactions"
          balance={wallet}
          setBalance={setWallet}
        />

        <BarChart
          data={[
            { name: "Food", value: categoryCounts.food },
            { name: "Entertainment", value: categoryCounts.entertainment },
            { name: "Travel", value: categoryCounts.travel },
          ]}
        />
      </div>

      {/* Modals */}
      <Modal isOpen={showExpenseModal} setIsOpen={setShowExpenseModal}>
        <ExpenseForm
        onSubmit={(expenseData)=>{
          setRecords((prevRecords)=>[...prevRecords,expenseData]);
          setWallet((prevWallet)=>prevWallet-expenseData.price);

          setShowExpenseModal(false);
        }}
        onCancel={()=>setShowExpenseModal(false)} />
      
      </Modal>

      <Modal isOpen={showBalanceModal} setIsOpen={setShowBalanceModal}>
          <BalanceForm 
          onSubmit={(income)=>{
            const incomeNumber=Number(income);
            if(!isNaN(incomeNumber)&&incomeNumber>0){
              setWallet((prevWallet)=>prevWallet+incomeNumber);
            }
            setShowBalanceModal(false);
          }}
          onCancel={()=>setShowBalanceModal(false)}
          />
      </Modal>
    </div>
  );
}
