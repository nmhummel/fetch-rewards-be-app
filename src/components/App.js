import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { uuid } from "uuidv4";
import { BoltIcon } from '@heroicons/react/24/outline'
import { nanoid } from 'nanoid';
import '../styles/App.css'
// import axios from 'axios';
import api from '../api'
import PayerCompanyPoints from './PayerCompanyPoints';
import Header from './Header';
import AllTransactions from "./AllTransactions";
// import AllRoutes from "./routes";
// import CurrentPoints from './components/CurrentPoints';

export default function App() {
  const [inputPoints, setPoints] = useState("");
  const [inputPayer, setPayer] = useState("");
  const [transactions, setTransactions] = useState([]);

  const transId = nanoid();


  const fetchTransactions = async () => {
    try {
      const response = await api.get('/transactions')
      setTransactions(response.data)  
      // console.log('RESP DATA', response.data)
      return response.data
    } catch (err) {
      if (err.response) {
        console.log("data error => ", err.response.data)
        console.log("status error => ", err.response.status)
        console.log("headers error => ", err.response.headers)
      } else {
        console.log('Error: ', err.message)
      }
    }
  }  
  useEffect(() => {
    const getAllTransactions = async () => {
      const allTransactions = await fetchTransactions();
      if (allTransactions) setTransactions(allTransactions);
    };
    getAllTransactions();
  }, [])

  useEffect(() => {
    //
  }, [transactions]);

  const handleAddingTransactions = async (newTransaction) => {
    console.log("newTransaction", newTransaction)
    const request = { 
      id: transId,
      ...newTransaction
    };
    const response = await api.post('/transactions', request);
    console.log('add resp', response)
    setTransactions([...transactions, response.data]);
  };

  console.log('TRANS 2', transactions)
  // const getPointsBalance = () => {
  //   const allPoints = 0;
  //   console.log("all trans", transactions)
  // }


  return (
    <div className="App">
    {/* <Router> */}
    {/* <Switch> */}
     <Header inputPoints={inputPoints} setPoints={setPoints} inputPayer={inputPayer} setPayer={setPayer} handleAddingTransactions={handleAddingTransactions}  />
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
            <div className="mt-4 max-w-2xl text-xl w-1/3 text-white lg:mx-auto">
              PayerCompanyPoints HERE
              <PayerCompanyPoints transactions={transactions} />
            </div>
            <div className="mt-4 max-w-2xl text-xl w-2/3 text-black lg:mx-auto w-full p-4 bg-fetchYellow rounded-md shadow-card">
              YOUR TRANSACTIONS
              {transactions.map((transaction, index) => (
                <AllTransactions
                  transaction={transaction}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </Switch> */}
      {/* </Router> */}
    </div>
  
  );
}


// const URL = `https://getpantry.cloud/apiv1/pantry/c27575c7-45cb-4920-afc1-b310fd565d7e`


// const initialData = [
//   { 'payerCompany': 'Pepsi', 'points': 150,'timestamp': '2022-01-01T07:00:00.000Z'},
//   { 'payerCompany': 'Colgate', 'points': 100,'timestamp': '2022-05-21T10:00:00.000Z'},
//   { 'payerCompany': 'Charmin', 'points': 200,'timestamp': '2022-02-01T08:45:00.000Z'},
//   { 'payerCompany': 'Fritos Lay', 'points': 300,'timestamp': '2022-02-23T11:36:00.000Z'},
//   { 'payerCompany': 'Yoplait', 'points': 50,'timestamp': '2022-03-11T16:04:00.000Z'},
//   { 'payerCompany': 'Bose', 'points': 500,'timestamp': '2022-06-14T15:18:36.000Z'},
//   { 'payerCompany': 'Timex', 'points': 750,'timestamp': '2022-03-01T22:00:00.000Z'},
//   { 'payerCompany': 'Sony', 'points': 10000,'timestamp': '2022-07-01T20:14:00.000Z'},
//   { 'payerCompany': 'Dell', 'points': 12500,'timestamp': '2022-02-01T13:33:00.000Z'},
//   { 'payerCompany': 'Purina', 'points': 300,'timestamp': '2022-05-01T15:12:00.000Z'},
//   { 'payerCompany': 'Contigo', 'points': 275,'timestamp': '2022-04-01T14:38:00.000Z'},
//   { 'payerCompany': 'Tostitos', 'points': 50,'timestamp': '2022-09-01T00:33:23.000Z'}
// ];


    // const postInstance = axios.create({ // axios#post(url[, data[, config]])
    //   baseURL: rootUrl,
    //   timeout: 1000,
    //   headers: {
    //     'X-Master-Key': masterKey,
    //     'Content-Type': 'application/json'
    //   }
    // });

      // const data = { 'bar': 123 };
  // const options = {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //   data: qs.stringify(data),
  //   url,
  // };
  // axios(options);