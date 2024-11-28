import React from 'react';
import ExpenseRow from './ExpenseRow';

interface Expense {
  id: number;
  title: string;
  amountPLN: number;
  amountEUR: number;
}

interface ExpenseTableProps {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, deleteExpense }) => {
  return (
    <div className="table">
      <div className="tableHeader">
        <div className="title">Title</div>
        <div className="amountPLNHead">Amount (PLN)</div>
        <div className="amountEURHead">Amount (EUR)</div>
        <div className="optionCell">Options</div>
      </div>
      {expenses.map((expense) => (
        <ExpenseRow key={expense.id} expense={expense} deleteExpense={deleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseTable;
