import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
// import {store} from '../src/redux/store';
import {Provider} from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from '../src/redux/store';
import myWatcher from '../src/redux/sagas/saga';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../src/redux/store';

// const store = configureStore();
// store.runSaga(myWatcher);
// persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>	
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
