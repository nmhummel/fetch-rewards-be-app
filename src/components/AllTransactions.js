import React from "react";

const AllTransactions = ({ transaction, index }) => {
  // console.log(transaction)
  let date = transaction.timestamp.toString().split('T')[0];
  let time = transaction.timestamp.toString().split('T')[1].split('.')[0]
  let friendlyDateAndTime = date + ' @ ' + time;

  // console.log(date, time)

  return (
    <div className="w-full p-4 bg-fetchYellow rounded-md shadow-card">
      <div className="transaction mt-2 ml-16 text-base text-black">
        <span className="transaction-text">
          <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Company</th>
              <th>Points</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{transaction.payerCompany}</td>
              <td>{transaction.points}</td>
              <td>{friendlyDateAndTime}</td>
            </tr>
            </tbody>
          </table>
        </span>
      </div>
    </div>
  );
};

export default AllTransactions;

