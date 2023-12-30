import { useState } from 'react';

function TransactionMenu({ onIncome, onExpense }) {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !title) return;

    const info = {
      id: data.length + 1,
      amount,
      title,
      transactionType,
    };

    if (transactionType === 'income') {
      onIncome(Number(amount));
    } else {
      onExpense(Number(amount));
    }

    setData((data) => [...data, info]);
    setAmount('');
    setTitle('');
    setTransactionType('expense');
    setMenu(!menu);
  }

  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <button
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6"
          onClick={() => setMenu(!menu)}
        >
          Add Transaction
        </button>

        {menu && (
          <div className="flex items-center">
            <div className="flex flex-col text-black gap-2">
              <input
                required
                type="number"
                placeholder="Enter Amount"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                required
                type="text"
                placeholder="Enter Title"
                className="p-2 border rounded-lg border-black placeholder:text-gray-700"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <select
                className="p-2 border rounded-lg"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <button
                onClick={handleSubmit}
                className="bg-black text-white mb-2 p-0 rounded-lg hover:bg-gray-700 mt-3"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
      {data.length > 0 &&
        data.map((el) => (
          <div className="flex" key={el.id}>
            <div
              className={`flex w-[200px] justify-between flex-row text-white gap-4 mb-2 p-2 rounded-md ${
                el.transactionType === 'expense' ? 'bg-red-500' : 'bg-green-700'
              }`}
            >
              <p>{el.title}</p>
              <p>{el.amount}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TransactionMenu;
