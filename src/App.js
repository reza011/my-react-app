import React from 'react';
import ball from './ball.svg';
import './App.css';
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ball} className="App-ball" alt="ball" />
        <p>
          مثالی  برای شروع برنامه نویسی
        </p>
        <FirstComponent textdisplay="سلام. اولین کامپونت پیاده سازی می شود"/>
      </header>
      <footer>این برنامه توسط رضا غلامعلی تبار توسعه داده شده است</footer>
    </div>
  );
}

export default App;
