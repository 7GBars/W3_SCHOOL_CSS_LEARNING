import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";

import {Card, CardsContainer} from "./components";
import {units} from "./__mocks__";

import './App.css';
import {useUnits} from "./hooks";
import Table from "./components/Table2";
import {columns, data} from "./components/Table2/tableData";

function App() {
  const [unitsLinks, unitsRoutes] = useUnits(units);
  const rowStyle = (row: any, index: number) => {
    return {
      width: '954px',
      backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', // Чередование цветов
      borderBottom: '5px solid #ddd', // Граница снизу
    };
  };
  return (
    <div className="App">
      <Table
        columns={columns}
        data={data}
        rowStyle={rowStyle}
        rowPadding="10px"
      />
      <Routes>
        {/* Основной маршрут (index) - по сути содержимое самого App если дальше ничего в path нет */}
        <Route
          key={Math.random()}
          index
          element={
            <CardsContainer>
              {unitsLinks}
            </CardsContainer>
          }
        />
        {unitsRoutes}
        <Route path="*" element={<>NO PAGE 404</>} />
      </Routes>
    </div>
  );
}

export default App;
