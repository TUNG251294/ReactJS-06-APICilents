import React from 'react';
import ReactDOM from 'react-dom/client';
import AxiosAllApp from './apps/AxiosAllApp';
import AxiosGetApp from './apps/AxiosGetApp';
import AxiosPostApp from './apps/AxiosPostApp';
import PromiseApp from './apps/PromiseApp';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Sử dụng 2 Terminal riêng biệt để chạy song song 2 dự án
// Sử dụng lệnh npm run start để chạy dự án server-mock-api
// Sử dụng lệnh npm start để khởi chạy dự án ReactJS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AxiosGetApp /> */}
    {/* <AxiosAllApp/> */}
    {/* <AxiosPostApp/> */}
    <PromiseApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
