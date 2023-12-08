import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// api.interceptors.request.use((config) => {
//   if (config.url === '/booking') {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// const token = localStorage.getItem('authToken');
// console.log('teste')
// if (token) {
//   console.log('teste2')
//   console.log(token)
//   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }