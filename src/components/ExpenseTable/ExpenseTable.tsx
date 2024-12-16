import React from 'react';
import ExpenseRow from '../ExpenseRow/ExpenseRow';
import { Expense } from '../List';
import "./ExpenseTable.css";


interface ExpenseTableProps {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
  saveEditedExpense: (id: number, title: string, amountPLN: number) => void;
  expenseChecked: (id: number, checked: boolean) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, deleteExpense, saveEditedExpense, expenseChecked }) => {

  const totalPLN = expenses.reduce((sum, exp) => sum + exp.amountPLN, 0).toFixed(2);
  const totalEUR = expenses.reduce((sum, exp) => sum + exp.amountEUR, 0).toFixed(2);

  return (
    <div className="table">
      <div className="tableHeader">
        <div className="checkbox">&#x2713;</div>
        <div className="title">Title</div>
        <div className="amountPLNHead">Amount (PLN)</div>
        <div className="amountEURHead">Amount (EUR)</div>
        <div className="optionCell">Options</div>
      </div>
      <div>
        {!expenses.length ? <p className="no-expenses">Add some expenses...</p> : ''}
        {expenses.map((expense) => (
          <ExpenseRow key={expense.id} expense={expense} deleteExpense={deleteExpense} saveEditedExpense={saveEditedExpense} expenseChecked={expenseChecked} />
        ))}
      </div>
      <p className="total-sum">Sum: {totalPLN} PLN / {totalEUR} EUR</p>
    </div>
  );
};

export default ExpenseTable;
