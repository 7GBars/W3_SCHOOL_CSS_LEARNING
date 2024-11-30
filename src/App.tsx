import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import {Table} from "./components/Table";
import {columns, customers} from "./__mocks__/customers";

function App() {
  const [count, setCount] = useState<number>(0);
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
        columns={columns}
      />
      <div>
        <button onClick={() => setCount(c=> ++c)}> + </button>
        <button onClick={() => setCount(c=> --c)}> - </button>
      </div>

    </div>
  );
};

export default App;
