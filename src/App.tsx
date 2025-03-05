import React from 'react';
import {Route, Routes} from "react-router-dom";
import {v4 as uuid} from "uuid";
import {units} from "./routes";

import {useUnits} from "./hooks";
import {CardsContainer} from "./components";

import './App.css';


function App() {
  const [unitsLinks, unitsRoutes] = useUnits(units);

  return (
    <div className="App">

      <Routes>
        {/* Основной маршрут (index) - по сути содержимое самого App если дальше ничего в path нет */}
        <Route
          key={uuid()}
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
