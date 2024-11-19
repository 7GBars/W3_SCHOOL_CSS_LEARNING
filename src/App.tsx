import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table width={'100%'} rowHeight={40}/>

    </div>
  );
}

export default App;
