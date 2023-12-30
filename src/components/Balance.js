import { useState } from 'react';
import TransactionMenu from './TransactionMenu';

function Balance() {
  const [balance, setBalance] = useState(0);
  const [Income, setIncome] = useState(1);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl mt-16">
        Balance: <span className="font-bold">10000</span>
      </p>
      <div className="flex flex-row space-x-8 mt-5 text-white">
        <p className="bg-green-800 p-2 rounded-xl">
          Income: <span className="font-bold">1000</span>
        </p>
        <p className="bg-red-500 p-2 rounded-xl">
          Expense: <span className="font-bold">1000</span>
        </p>
      </div>
      <TransactionMenu />
    </div>
  );
}

export default Balance;
