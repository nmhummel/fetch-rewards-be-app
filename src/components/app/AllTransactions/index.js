import React from "react";

const AllTransactions = (index, transaction) => {
  return (
    <div className="w-full p-4 bg-fetchYellow rounded-md shadow-card">
     <div className="transaction mt-2 ml-16 text-base text-gray-500">
        <span className="transaction-text">
            {index + 1}. {transaction.payerCompany} / {transaction.points} / {transaction.timestamp}
        </span>
    </div>

    </div>
  );
};

export default AllTransactions;

