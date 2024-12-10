import React, {useCallback, useEffect, useRef, useState} from 'react';
import './App.css';
import {Table} from "./components/Table";
import {columns, customers, type TCustomer} from "./__mocks__/customers";
import {batchedFetch} from "./helpers/batching";
import {fetchMock, Todo, urls} from "./__mocks__/batchedFetchs";


function App() {
  const [count, setCount] = useState<number>(0);
  const rowConfig = useRef({
    height: 70,
    alignment: 'right',
    verticalAlign: 'middle',
  } as const);

  useEffect(() => {
    batchedFetch<Todo>(urls, fetchMock, 3)
      .then((results) => console.log("Результаты:", results))
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  const savedTableData = useRef(customers).current;
  const savedColumns = useRef(columns).current;


  return (
    <div className="App">

      <Table<TCustomer>
        width={'100%'}
        rowConfig={rowConfig.current}
        data={savedTableData}
        columns={savedColumns}
      />
      <div>
        <button onClick={() => setCount(c=> ++c)}> + </button>
        <button onClick={() => setCount(c=> --c)}> - </button>
      </div>

    </div>
  );
};

export default App;
