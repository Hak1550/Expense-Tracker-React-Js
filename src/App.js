import React from 'react';
import './App.css';
import { Heading } from './Components/Heading';
import { Balance } from './Components/Balance';
import { IncomeExpence } from './Components/IncomeExpence';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

function App() {
  return (
    <>
<Heading />
<Balance />
<IncomeExpence />
<TransactionList />
<AddTransaction />
    </>
    );
}

export default App;
