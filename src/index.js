import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/index.scss'
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from './components/context/MainContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContextProvider>
  </React.StrictMode>
);
