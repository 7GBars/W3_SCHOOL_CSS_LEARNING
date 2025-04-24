import React from 'react';
import {Route, Routes} from "react-router-dom";
import {v4 as uuid} from "uuid";
import {units} from "./routes";

import {useUnits} from "./hooks";
import {CardsContainer} from "./components";

import './App.css';
import {useRoutes} from "@/providers";

import { AnimatedPanels } from "@/components/ResizePanel";
import { AnimatedPanels as Demo1} from "@/components/ResizePanel/ControledElement";



function App() {
  const { unitsLinks, unitsRoutes } = useRoutes();
  return (
    <div className="App">
      {/*<AnimatedPanels />*/}
      <Demo1 />
      {/*<ReflexControlsDemo/>*/}
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
