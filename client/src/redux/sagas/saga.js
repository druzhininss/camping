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
  try {
    const getProductList = yield call(fetchData, {
      url: `http://localhost:5000/categories/${action.payload}`,
    });
    yield put({ type: "GOODS_RECEIVED", payload: getProductList });
  } catch (e) {
    yield put({ type: "THE_ITEM_IS_NOT_RECEIVED", payload: "Error, The item is not received" })
  }
}

export function* myWatcher() {
  yield takeEvery("LOGIN_ADMIN_SAGA", getAdmin);
  yield takeEvery("INIT_PRODUCTS", getProduct)
}

export default myWatcher;
