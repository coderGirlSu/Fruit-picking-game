import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Help from "./component/Help";
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="help" element={<Help/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
