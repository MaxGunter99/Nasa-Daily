import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Reducer from "./reducers";


const rootElement = document.getElementById("root");
const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
);