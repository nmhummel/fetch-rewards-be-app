import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:3500/'

//     // 'https://my-json-server.typicode.com/nmhummel/fetch-rewards-be-app/transactions'
// })

// ● Add transactions for a specific payer and date. ‘/addTransactions’
// ● Spend points using the rules above and return a list of { "payer": , "points": } for each call. ‘/spendPoints’
// ● Return all payer point balances. ‘/getAllPointBalances’


const transactionsURL = 'https://my-json-server.typicode.com/nmhummel/fetch-rewards-be-app/transactions'

const AllRoutes = () => {
    axios('/transactions', getAllTransactions);
    axios('/getpointsbalance', getPointsBalance);
    axios.post('/addtransaction', addTransaction);
    axios.post('/spendpoints', spendPoints);
};


const getAllTransactions = async () => { 
    let allTransactions = {}
    const { data, status } = await axios(transactionsURL)
    // if (status === 200) allTransactions = data
    console.log("fetch status", status)
    console.log('fetch data', data)
}

const getPointsBalance = () => {

}

const addTransaction = () => {
   

}

const spendPoints = () => {
}


export default AllRoutes; 
