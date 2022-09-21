import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3005/',
    // timeout: 1000,
})


// const baseURL = 'http://localhost:3500/'
// const instance = axios.create({
//   baseURL: baseURL,
//   timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });