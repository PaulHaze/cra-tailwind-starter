import React from 'react';
import ReactDOM from 'react-dom';

//* ADD THESE FOR REDUX
// import { Provider } from 'react-redux';
// import store from './redux/store';

import './styles/main.scss';
import { AppRoutes } from './routes';
// import { Home } from './views';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AppRoutes />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
