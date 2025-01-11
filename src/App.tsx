import React from 'react';

import './App.css';
import {Card, CardsContainer} from "./components";
import {units} from "./__mocks__";


function App() {
  const unitsCards = units.map((u) => <Card id={u.id} title={u.title} description={u.description}/>)
  return (
    <div className="App">
      test
      <CardsContainer>
        {unitsCards}
      </CardsContainer>
    </div>
  );
};

export default App;
