import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table";
import {customers} from "./__mocks__/customers";

function App() {
  return (
    <div className="App">

      <Table
        width={'100%'}
        rowHeight={40}
        data={customers}
        columns={['CompanyName', 'City', 'Phone']}
      />
      <div></div>

    </div>
  );
}

export default App;
