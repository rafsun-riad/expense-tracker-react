import { useState } from 'react';
import TransactionMenu from './TransactionMenu';

function Balance() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function handleIncome(amount) {
    setIncome((income) => income + amount);
    setBalance((balance) => balance + amount);
  }

  function handleExpense(amount) {
    setExpense((expense) => expense + amount);
    setBalance((balance) => balance - amount);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl mt-16">
        Balance: <span className="font-bold">{balance}</span>
      </p>
      <div className="flex flex-row space-x-8 mt-5 text-white">
        <p className="bg-green-800 p-2 rounded-xl">
          Income: <span className="font-bold">{income}</span>
        </p>
        <p className="bg-red-500 p-2 rounded-xl">
          Expense: <span className="font-bold">{expense}</span>
        </p>
      </div>
      <TransactionMenu onIncome={handleIncome} onExpense={handleExpense} />
    </div>
  );
}

export default Balance;
