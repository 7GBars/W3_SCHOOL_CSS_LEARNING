import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import {Table} from "./components/Table";
import { customers, type TCustomer } from "./__mocks__/customers";

function App() {
  const [count, setCount] = useState<number>(0);
  const rowConfig = useRef({
    height: 70,
    alignment: 'right',
    verticalAlign: 'middle',
  } as const);
  return (
    <div className="App">

      <Table<TCustomer>
        width={'100%'}
        rowConfig={rowConfig.current}
        data={customers}
        columns={[
          {id: 1, width: 100, caption: 'Город', dataField: 'City'},
          {id: 2, width: 200, caption: 'Компания', dataField: 'CompanyName'},
          {id: 3, width: 50, caption: 'Телефон', dataField: 'Phone'},
        ]}
      />
      <div>
        <button onClick={() => setCount(c=> ++c)}> + </button>
        <button onClick={() => setCount(c=> --c)}> - </button>
      </div>

    </div>
  );
};

export default App;
