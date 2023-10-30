import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/scss/app.scss"
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AllContextProvider from "./components/context/AllContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AllContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AllContextProvider>
    </Provider>
  </React.StrictMode>
);
