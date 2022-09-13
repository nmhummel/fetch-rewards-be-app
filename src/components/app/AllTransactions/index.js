import React from "react";

const AllTransactions = (index, transaction) => {
  return (

     <div className="transaction mt-2 ml-16 h-48 scroll-smooth text-base text-gray-500">
        <span className="transaction-text">
            {index + 1}. {transaction.payerCompany} / {transaction.points} / {transaction.timestamp}
        </span>
    </div>


  );
};

export default AllTransactions;

