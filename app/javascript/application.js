import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import loadGreeting from './redux/action';
import store from './redux/configureStore';
import { Provider } from 'react-redux'

store.dispatch(loadGreeting());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);