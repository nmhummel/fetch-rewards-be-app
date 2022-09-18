// import React from 'react'
// import axios from "axios";

// const masterKey = '$2b$10$IxDgK.fBVhDtI9ymUw8o0e5fOQHsHMXxpwGOWWC3G3MYtpQpvH8HG';
// const rootUrl = 'https://api.jsonbin.io/v3';
// const getEndpoint = rootUrl + '/b/63260938a1610e63862eb749';
// const postEndpoint = rootUrl + '/b';

// const AxiosConfigure = () => {



//   const postConfig = { // axios.post(url[, data[, config]])
//     method: 'post',
//     url: rootUrl + '/b',
//     data: newTransaction
//   }
//   const postInstance = axios.create({ // axios#post(url[, data[, config]])
//     baseURL: rootUrl,
//     timeout: 1000,
//     headers: {
//       'X-Master-Key': masterKey,
//       'Content-Type': 'application/json'
//     }
//     })


//     const X = 
//     {
//     url: '/user',
//     method: 'get', // default
//     baseURL: 'https://some-domain.com/api',

//     transformRequest: [function (data, headers) {
//         // `transformRequest` allows changes to the request data before it is sent to the server
//     // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
//     // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
//     // FormData or Stream
//     // You may modify the headers object.
//         return data;
//     }],


//     transformResponse: [function (data) {
//         // `transformResponse` allows changes to the response data to be made before
//     // it is passed to then/catch
//         return data;
//     }],

//     // `headers` are custom headers to be sent
//     headers: {'X-Requested-With': 'XMLHttpRequest'},


//     // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'
//     // When no `transformRequest` is set, must be of one of the following types:
//     // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
//     // - Browser only: FormData, File, Blob
//     // - Node only: Stream, Buffer
//     data: {
//         firstName: 'Fred'
//     },

//     responseType: 'json', // default
    
//     validateStatus: function (status) {
//         return status >= 200 && status < 300; // default
//     },

//     // `maxRedirects` defines the maximum number of redirects to follow in node.js.
//     // If set to 0, no redirects will be followed.
//     maxRedirects: 5, // default

//     }

 
// };

// export default AxiosConfigure;