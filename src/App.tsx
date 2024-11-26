import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table";
import {customers} from "./__mocks__/customers";

function App() {
  const rowConfig = useRef({
    height: 70,
    alignment: 'right',
    verticalAlign: 'middle',
  } as const);
  return (
    <div className="App">

      <Table
        width={'100%'}
        rowConfig={rowConfig.current}
        data={customers}
        columns={['CompanyName', 'City', 'Phone']}
      />
      <div></div>

    </div>
  );
}

export default App;
