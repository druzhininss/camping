/* eslint-disable no-unused-vars */
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';

const fetchData = async ({
  url, method, headers, body,
}) => {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
};

function* checkLoginAdmin(action) { // Логинизация админа
  console.log(action.payload);
  try {
    const getLoginAdmin = yield call(fetchData, {
      url: 'http://localhost:5000/admin',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: action.payload.email, password: action.payload.password })
    });
    console.log(getLoginAdmin);
    yield put({ type: "INIT_ADMIN_IN_SYSTEM", payload: getLoginAdmin })
  } catch (e) {
    yield put({ type: "DONT_INIT_ADMIN_IN_SYSTEM", payload: "Error login admin" })
  }
}

function* getProducts(action) { // Все продукты для сайта
  try {
    const getProductList = yield call(fetchData, {
      url: `http://localhost:5000/categories/${action.payload}`,
    });
    yield put({ type: "GOODS_RECEIVED", payload: getProductList });
    // localStorage
  } catch (e) {
    yield put({ type: "THE_ITEM_IS_NOT_RECEIVED", payload: "Error, The item is not received" })
  }
}

function* getAllProducts(action) {
  try {
    const getListAllProduct = yield call(fetchData, {
      url: 'http://localhost:5000/categories/products',
    });
    yield put({ type: "LIST_OF_ALL_PRODUCTS", payload: getListAllProduct });
    // localStorage
  } catch (e) {
    yield put({ type: "NO_LIST_OF_ALL_PRODUCTS", payload: "Error, The item is not received" })
  }
}

function* getOrderProducts(action) { // Все заказы для админки 
  console.log(action);
  try {
    const getProductsOrdersFromCart = yield call(fetchData, {
      url: 'http://localhost:5000/orders',
    });
    yield put({ type: "USER_ORDERS", payload: getProductsOrdersFromCart });
  } catch (e) {
    yield put({ type: "NO_USER_ORDERS", payload: "Error, The item is not received" })
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
    if (newUser.login) {
      yield put({ type: "NEW_USER", payload: newUser })
    }

    if (newUser.message) {
      yield put({ type: "REGISTRATION_FAILED", payload: newUser })
    }

  } catch (e) {
    yield put({ type: "USER_NOT_REGISTERED", payload: "Error registration" })
  }
}

function* sendLoginData(action) {
  try {
    const loginUser = yield call(fetchData, {
      url: 'http://localhost:5000/login',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password,
      })
    });

    if (loginUser.login) {
      yield put({ type: "LOGIN_SUCCESS", payload: loginUser })
    }

    if (loginUser.message) {
      yield put({ type: "LOGIN_FAILED", payload: loginUser })
    }

  } catch (e) {
    yield put({ type: "LOGIN_FAILED", payload: "Login failed" })
  }
}

function* logoutUser(action) {
  try {
    const logoutUserFetch = yield call(fetchData, {
      url: 'http://localhost:5000/logout',
    });
    yield put({ type: "LOGOUT_SUCCESS", payload: logoutUserFetch })
  } catch (e) {
    yield put({ type: "LOGOUT_FAILED", payload: "Logout failed" })
  }
}

export function* myWatcher() {
  yield takeEvery("LOGIN_ADMIN_SAGA", checkLoginAdmin);
  yield takeEvery("INIT_PRODUCTS", getProducts);
  yield takeEvery("GET_ALL_PRODUCTS", getAllProducts);
  yield takeEvery("GET_ORDER_PRODUCT", getOrderProducts);
  yield takeEvery("REGISTER_USER", getUser);
  yield takeEvery("LOGIN_USER", sendLoginData);
  yield takeEvery("LOGOUT_USER", logoutUser);
}

export default myWatcher;
