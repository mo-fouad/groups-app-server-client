import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import configureStore from "./redux/configureStore";

import App from "./components/App";

import "./scss/app.scss";

const store = configureStore();

render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById("app")
);
