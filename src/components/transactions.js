import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500/'

    // 'https://my-json-server.typicode.com/nmhummel/fetch-rewards-be-app/transactions'
})