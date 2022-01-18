import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import { myWatcher } from './sagas/saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// const sagaMiddleware = createSagaMiddleware();


// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
export { store, persistor, sagaMiddleware };

// export default function configureStore() {
//   const sagaMiddleware = createSagaMiddleware()
//   return {
//     ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
//     runSaga: sagaMiddleware.run,
//   }
// }


sagaMiddleware.run(myWatcher);
