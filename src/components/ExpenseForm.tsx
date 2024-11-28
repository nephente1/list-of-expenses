import React, { useState } from 'react';

interface ExpenseFormProps {
  eurVal: number;
  setEurVal: (value: number) => void;
  addExpense: (title: string, amountPLN: number) => void;
  setErrorMessage: (message: string) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  eurVal,
  setEurVal,
  addExpense,
  setErrorMessage,
}) => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputPln, setInputPln] = useState<string>('');

  const handleAdd = () => {
    const errors: string[] = [];
    if (inputTitle.length < 5) errors.push('Title should have at least 5 characters.');
    if (!inputPln || isNaN(Number(inputPln))) errors.push('Type a valid amount in PLN.');

    if (errors.length > 0) {
      setErrorMessage(errors.join(' '));
      return;
    }

    setErrorMessage('');
    addExpense(inputTitle, parseFloat(inputPln));
    setInputTitle('');
    setInputPln('');
  };

  return (
    <div className="inputs">
      <label>
        Type value: 1 EUR
        <input
          type="number"
          value={eurVal}
          onChange={(e) => setEurVal(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Title of transaction
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </label>
      <label>
        Amount (in PLN)
        <input
          type="text"
          value={inputPln}
          onChange={(e) => setInputPln(e.target.value)}
        />
      </label>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default ExpenseForm;
