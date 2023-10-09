import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/index.scss'
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import AllContextProvider from './components/context/AllContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <AllContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllContextProvider>
  </React.StrictMode>
  </Provider>
);
