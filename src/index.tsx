import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {RoutesProvider} from "@/providers";
import {units} from "@/routes";

import App from './App';

import reportWebVitals from './reportWebVitals';
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <RoutesProvider units={units}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </RoutesProvider>
  </BrowserRouter>
);

reportWebVitals();
