/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';

const fetchData = async ({
  url, method, headers, body,
}) => {
  const response = await fetch(url, { method, headers, body });
  const data = await response.json();
  return data;
};

function* getAdmin(action) {
  try {
    const getLoginAdmin = yield call(fetchData, {
      url: 'http://localhost:5000/login',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(action.payload)
    });
    yield put({ type: "INIT_ADMIN_IN_SYSTEM", payload: getLoginAdmin })
  } catch (e) {
    yield put({ type: "DONT_INIT_ADMIN_IN_SYSTEM", payload: "Error login admin" })
  }
}

function* getProduct(action) {
  console.log(action);
  try {
    const getProductList = yield call(fetchData, {
      url: `http://localhost:5000/categories/${action.payload}`,
    });
    yield put({ type: "GOODS_RECEIVED", payload: getProductList })
  } catch (e) {
    yield put({ type: "THE_ITEM_IS_NOT_RECEIVED", payload: "Error, The item is not received" })
  }
}

function* getUser(action) {
  try {
    const newUser = yield call(fetchData, {
      url: 'http://localhost:5000/registration',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(action.payload)
    });
    yield put({ type: "NEW_USER", payload: newUser })
  } catch (e) {
    yield put({ type: "USER_NOT_REGISTERED", payload: "Error registration" })
  }
}

export function* myWatcher() {
  yield takeEvery("LOGIN_ADMIN_SAGA", getAdmin);
  yield takeEvery("INIT_PRODUCTS", getProduct);
  yield takeEvery("REGISTER_USER", getUser)

}

export default myWatcher;
