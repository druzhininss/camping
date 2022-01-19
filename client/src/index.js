import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../src/redux/store';
import  './index.css';

ReactDOM.render(
  <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>	
    <App />
    </PersistGate>
    </Provider>
  </>,
  document.getElementById('root'),
);
