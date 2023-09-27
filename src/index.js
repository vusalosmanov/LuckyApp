import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/index.scss'
import { BrowserRouter } from "react-router-dom";
import AllContextProvider from './components/context/AllContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllContextProvider>
  </React.StrictMode>
);
