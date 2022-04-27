import React from 'react';
import ReactDOM from 'react-dom';

// NAVIGATION
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/main.scss';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
