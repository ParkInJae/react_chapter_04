import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from "./chapter_04/Clock";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{ // setInterval() >>  매 밀리초마다 실행되는 function 
  // 매 밀리초마다 Clock을 불러서 시간을 볼 수 있다. 
  root.render(
    <React.StrictMode>
      <App/>
      <Clock />
    </React.StrictMode>
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
