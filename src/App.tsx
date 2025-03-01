import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";

import {units} from "./routes";

import './App.css';
import {useUnits} from "./hooks";

import Table from "./components/Table2";
import { testColumns, testData } from "./__mocks__";

function App() {
  const [unitsLinks, unitsRoutes] = useUnits(units);

  return (
    <div className="App">
      <Table
        columns={testColumns}
        data={testData}
        height={'500px'}

      />
      {/*<Routes>*/}
      {/*  /!* Основной маршрут (index) - по сути содержимое самого App если дальше ничего в path нет *!/*/}
      {/*  <Route*/}
      {/*    key={Math.random()}*/}
      {/*    index*/}
      {/*    element={*/}
      {/*      <CardsContainer>*/}
      {/*        {unitsLinks}*/}
      {/*      </CardsContainer>*/}
      {/*    }*/}
      {/*  />*/}
      {/*  {unitsRoutes}*/}
      {/*  <Route path="*" element={<>NO PAGE 404</>} />*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
