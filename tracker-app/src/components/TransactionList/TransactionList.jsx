import TransactionCard from "../TransactionCard/TransactionCard";
import './TransactionList.css'
import Modal from "../Modal";
import ExpenseForm from "../Forms/ExpenseForm";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const maxRecords = 3;
export default function TransactionList({
  transactions, // [A, B, C, D]
  title,
  editTransactions,
  balance,
  setBalance,
}) {
  const [editId, setEditId] = useState(0);
  const [isDisplayEditor, setIsDisplayEditor] = useState(false);

  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 2
  const [totalPages, setTotalPages] = useState(0);

  const handleDelete = (id) => {
    const item = transactions.find((i) => i.id == id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);

    editTransactions((prev) => prev.filter((item) => item.id != id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsDisplayEditor(true);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * maxRecords; // 3
    const endIndex = Math.min(currentPage * maxRecords, transactions.length); // Math.min(6, 4) => 4

    setCurrentTransactions([...transactions].slice(startIndex, endIndex)); // [A, B, C, D].slice(3, 4) => [D]
    setTotalPages(Math.ceil(transactions.length / maxRecords)); // Math.ceil(4 / 3) => 2
  }, [currentPage, transactions]);

  // update page if all items on current page have been deleted
  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages]);

  return (
    <div className="container">
      {title && <h2>{title}</h2>}

      {transactions.length > 0 ? (
        <div className="lists">
          <div>
            {currentTransactions.map((transaction) => (
              <TransactionCard
                details={transaction}
                key={transaction.id}
                handleDelete={() => handleDelete(transaction.id)}
                handleEdit={() => handleEdit(transaction.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              updatePage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="emptycontainer">
          <p>No transactions!</p>
        </div>
      )}

      <Modal isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
        <ExpenseForm
          editId={editId}
          expenseList={transactions}
          setExpenseList={editTransactions}
          setIsOpen={setIsDisplayEditor}
          balance={balance}
          setBalance={setBalance}
        />
      </Modal>
    </div>
  );
}
