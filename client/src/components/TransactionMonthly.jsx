import React from "react";

const TransactionMonthly = ({
  date,
  netIncome,
  totalIncome,
  totalExpense,
  transactions,
}) => {
  const getAmountClass = (amount) => {
    if (amount > 0) return "text-green-500"; // Income (green)
    if (amount < 0) return "text-red-500"; // Expense (red)
    return "text-gray-500"; // Neutral (gray)
  };

  return (
    <div className="monthlystrans-container flex justify-between items-center py-4 border-b border-b-gray-400">
      <div className="date-range flex flex-row flex-shrink-0">
        <div className="date1 flex flex-col justify-center items-center">
          <h3 className="text-lg">{date.month}</h3>
        </div>
      </div>
      <div className="finances flex flex-row space-x-4">
        <div className="income flex flex-col items-center">
          <h3 className="text-xs text-gray-300 font-light">Income</h3>
          <h4 className={`text-sm ${getAmountClass(totalIncome)}`}>
            ₱{totalIncome.toFixed(2)}
          </h4>
        </div>
        <div className="expense flex flex-col items-center">
          <h3 className="text-xs text-gray-300 font-light">Expense</h3>
          <h4 className={`text-sm ${getAmountClass(totalExpense)}`}>
            ₱{totalExpense.toFixed(2)}
          </h4>
        </div>
        <div className="net flex flex-col items-center">
          <h3 className="text-xs text-gray-300 font-light">Net</h3>
          <h4 className={`text-sm font-medium ${getAmountClass(netIncome)}`}>
            ₱{netIncome.toFixed(2)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TransactionMonthly;