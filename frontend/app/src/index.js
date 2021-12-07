import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

// import bootstrap:
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
// import store from "./store";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
