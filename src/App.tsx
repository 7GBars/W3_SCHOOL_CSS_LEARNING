import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";

import {Card, CardsContainer} from "./components";
import {units} from "./__mocks__";

import './App.css';
import {useUnits} from "./hooks";

function App() {
  const [unitsLinks, unitsRoutes] = useUnits(units);

  return (
    <div className="App">
      <Routes>
        {/* Основной маршрут (index) - по сути содержимое самого App если дальше ничего в path нет */}
        <Route
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
