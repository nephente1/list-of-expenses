import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseTable from './ExpenseTable/ExpenseTable';

export interface Expense {
  id: number;
  title: string;
  amountPLN: number;
  amountEUR: number;
  checked: boolean;
}

const List: React.FC = () => {
  const [eurVal, setEurVal] = useState<number>(4.382);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const addExpense = (title: string, amountPLN: number) => {
    const newExpense: Expense = {
      id: Date.now(),
      title,
      amountPLN,
      amountEUR: parseFloat((amountPLN / eurVal).toFixed(2)),
      checked: false
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const saveEditedExpense = (id: number, title: string, amountPLN: number) => {
    setExpenses((prev) =>
      prev.map((expense) => (expense.id === id ? { ...expense, title, amountPLN, amountEUR: parseFloat((amountPLN / eurVal).toFixed(2)) } : expense))
    );
  };

  const expenseChecked = (id: number, checked: boolean) => () => {
    setExpenses((prev) =>
      prev.map((expense) => (expense.id === id ? { ...expense, checked: checked } : expense))
    );
  }

  return (
    <div className="app">
      <h1>List of Expenses</h1>
      <ExpenseForm
        eurVal={eurVal}
        setEurVal={setEurVal}
        addExpense={addExpense}
        setErrorMessage={setErrorMessage}
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} saveEditedExpense={saveEditedExpense} expenseChecked={expenseChecked} />
    </div>
  );
};

export default List;
