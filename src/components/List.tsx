import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';

interface Expense {
  id: number;
  title: string;
  amountPLN: number;
  amountEUR: number;
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
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const totalPLN = expenses.reduce((sum, exp) => sum + exp.amountPLN, 0).toFixed(2);
  const totalEUR = expenses.reduce((sum, exp) => sum + exp.amountEUR, 0).toFixed(2);

  return (
    <div>
      <h1>List of Expenses</h1>
      <ExpenseForm
        eurVal={eurVal}
        setEurVal={setEurVal}
        addExpense={addExpense}
        setErrorMessage={setErrorMessage}
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
      <h2>Sum: {totalPLN} PLN / {totalEUR} EUR</h2>
    </div>
  );
};

export default List;
