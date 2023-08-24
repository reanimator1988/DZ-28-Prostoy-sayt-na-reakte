import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import Header from './Header.jsx'
import Main from './Main.jsx'



const rootE1 = document.getElementById('root');
const root = ReactDOM.createRoot(rootE1);

root.render(
    <>
      <Header />
      <Main />
    </>
)

