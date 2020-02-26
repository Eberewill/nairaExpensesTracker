import React from 'react';

import './App.css';
import Header from './components/Header'
import Ballance from './components/Ballance'
import IncomeExpences from './components/IncomeExpences'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div>
     <Header/>
     <div className="container">
       <Ballance/>
       <IncomeExpences/>
       <TransactionList/>
       <AddTransaction/>

     </div>
    </div>
  );
}

export default App;
