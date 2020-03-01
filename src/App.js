import React from 'react';

import './App.css';
import Header from './components/Header'
import Ballance from './components/Balance'
import IncomeExpences from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    
      <GlobalProvider>
     <Header/>
     <div className="container">
       <Ballance/>
       <IncomeExpences/>
       <TransactionList/>
       <AddTransaction/>

     </div>
    </GlobalProvider>
  );
}

export default App;
