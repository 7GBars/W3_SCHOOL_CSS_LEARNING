import React from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";

import {Card, CardsContainer} from "./components";
import {units} from "./__mocks__";

import './App.css';

function App() {
  const unitsLinks = units.map((u) => (
    <Link key={u.id} to={u.path}>
    <Card id={u.id} title={u.title} description={u.description}/>
  </Link>
  ));

  const unitsRoutes = units.map((u) => (
    <Route path={u.path} Component={u.component as any} />
  ))

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
