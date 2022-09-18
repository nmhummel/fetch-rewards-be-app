import { Axios } from "axios";

const server = Axios;


const AllRoutes = () => {
    // server.get('/transactions', getAllTransactions);
    server.get('/getpointsbalance', getPointsBalance);
    server.post('/addtransaction', addTransaction);
    server.post('/spendpoints', spendPoints);
};


// const getAllTransactions = () => {

// }

const getPointsBalance = () => {

}

const addTransaction = () => {
   

}

const spendPoints = () => {
}


export default AllRoutes; 
