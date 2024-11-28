import React from 'react';

interface Expense {
  id: number;
  title: string;
  amountPLN: number;
  amountEUR: number;
}

interface ExpenseRowProps {
  expense: Expense;
  deleteExpense: (id: number) => void;
}

const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense, deleteExpense }) => {
  return (
    <div className="rows">
      <div className="title">{expense.title}</div>
      <div className="amountPLN">{expense.amountPLN.toFixed(2)}</div>
      <div className="amountEUR">{expense.amountEUR.toFixed(2)}</div>
      <div>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseRow;
