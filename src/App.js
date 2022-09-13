import React, { useState } from "react";
import './styles/App.css'
import CurrentPoints from './components/app/CurrentPoints';
// import PayerCompanyPoints from './components/app/PayerCompanyPoints';
// import AllTransactions from './components/app/AllTransactions';
// import { faker } from '@faker-js/faker';
import Form from './components/Form';
import Transaction from "./components/Transaction";
import { BoltIcon } from '@heroicons/react/24/outline'
// ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon
// all of this is rendered inside main index.js file

const initialData = [
  { 'payerCompany': 'Pepsi', 'points': 150,'timestamp': '2022-01-01T07:00:00.000Z'},
  { 'payerCompany': 'Colgate', 'points': 100,'timestamp': '2022-05-21T10:00:00.000Z'},
  { 'payerCompany': 'Charmin', 'points': 200,'timestamp': '2022-02-01T08:45:00.000Z'},
  { 'payerCompany': 'Fritos Lay', 'points': 300,'timestamp': '2022-02-23T11:36:00.000Z'},
  { 'payerCompany': 'Yoplait', 'points': 50,'timestamp': '2022-03-11T16:04:00.000Z'},
  { 'payerCompany': 'Bose', 'points': 500,'timestamp': '2022-06-14T15:18:36.000Z'},
  { 'payerCompany': 'Timex', 'points': 750,'timestamp': '2022-03-01T22:00:00.000Z'},
  { 'payerCompany': 'Sony', 'points': 10000,'timestamp': '2022-07-01T20:14:00.000Z'},
  { 'payerCompany': 'Dell', 'points': 12500,'timestamp': '2022-02-01T13:33:00.000Z'},
  { 'payerCompany': 'Purina', 'points': 300,'timestamp': '2022-05-01T15:12:00.000Z'},
  { 'payerCompany': 'Contigo', 'points': 275,'timestamp': '2022-04-01T14:38:00.000Z'},
  { 'payerCompany': 'Tostitos', 'points': 50,'timestamp': '2022-09-01T00:33:23.000Z'}
];


export default function App() {
  const [inputPoints, setPoints] = useState("");
  const [inputPayer, setPayer] = useState("");
  const [transactions, setTransactions] = useState(initialData);
  // const [time, setTime] = useState(initialData.timestamp)
  let now = new Date();
  let convert = now.toISOString()

  const handleSubmit = () => {
    if (inputPoints === "" || inputPayer === "") return;

    const newTransaction = { payerCompany: inputPayer, points: inputPoints, timestamp: convert };
    setTransactions([...transactions, newTransaction]);
    setPoints("");
    setPayer("");
  };

  return (

    <div className="App">
      <header className="App-header flex flex-row items-center">
        <img className='App-Fetch-Doggie basis-1/6 justify-start' src='/fetch-doggie.png' alt='Fetch Rewards Logo' />
        <h1 className="text-3xl font-bold basis-1/6">
          Hello Doggo!
        </h1>
        <div className="items-right basis-4/6">
        <Form
          inputPoints={inputPoints}
          setPoints={setPoints}
          inputPayer={inputPayer}
          setPayer={setPayer}
          handleSubmit={handleSubmit}
        />
        </div>
      </header>

      <div className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">

          </div>

          <div className="mt-10">
            <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-fetchYellow text-white">
                    <BoltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-white">PayerCompany List: 'Iterate through all payers and list them below with their points.'</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">Transactions: 'The list of all transactions. Scroll in limited window.'</p>
                </div>
            </div>
            {/* <div className="mt-4 max-w-2xl text-xl w-1/3 text-white lg:mx-auto">
              PayerCompanyPoints HERE
              <PayerCompanyPoints />
            </div> */}
            <div className="mt-4 max-w-2xl text-xl w-2/3 text-black lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">
              YOUR TRANSACTIONS
              {transactions.map((transaction, index) => (
                <Transaction
                  transaction={transaction}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
