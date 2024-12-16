import React from 'react';
import "./ExpenseRow.css";
import { Expense } from '../List';


interface ExpenseRowProps {
  expense: Expense;
  deleteExpense: (id: number) => void;
  saveEditedExpense: (id: number, title: string, amountPLN: number) => void;
  expenseChecked: (id: number, checked: boolean) => void;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense, deleteExpense, saveEditedExpense, expenseChecked }) => {
  const [editData, setEditData] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(expense.checked);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const amountRef = React.useRef<HTMLInputElement>(null);

  const handleDeleteExpense = () => {
    deleteExpense(expense.id);
  };

  const handleSaveExpense = () => {
      saveEditedExpense(expense.id, titleRef.current.value, parseFloat(amountRef.current.value));
      setEditData(false);
  }

  const handleExpenseChecked = (id) => {  
    expenseChecked(id, isChecked);
    setIsChecked(!isChecked);
  }

  return (
    <div className={isChecked ? "row checked" : "row"}>
      <div className="checkbox">
        <input type="checkbox" checked={isChecked} onChange={() => handleExpenseChecked(expense.id)} />
      </div>
      <div className="title">
        {editData ? <input ref={titleRef} defaultValue={expense.title} /> : expense.title}
      </div>
      <div className="amountPLN">
        {editData ? <input ref={amountRef} defaultValue={expense.amountPLN} /> : expense.amountPLN.toFixed(2)}
      </div>
      <div className="amountEUR">
        {expense.amountEUR.toFixed(2)}
      </div>
      <div className="option-btns">
        {!editData && <button onClick={() => setEditData(true)}>Edit</button>}
        {editData && <button onClick={handleSaveExpense}>Save</button>}
        <button onClick={handleDeleteExpense}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseRow;
