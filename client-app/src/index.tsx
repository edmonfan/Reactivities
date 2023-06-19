import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import App from './App/layout/App';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './App/stores/store';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StoreContext.Provider value ={store}>
        <App  />,
  </StoreContext.Provider>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
