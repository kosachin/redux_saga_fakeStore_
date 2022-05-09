import { put, takeLatest, call } from "redux-saga/effects";
import { fetchProductsDataSuc, fetchOneUserById } from "../redux/actions";
const fetchData = () => {
  const data = fetch("https://fakestoreapi.com/users").then((res) =>
    res.json()
  );
  return data;
};

const fetchOneUser = (payload) => {
  const data = fetch(`https://fakestoreapi.com/users/${payload}`).then((res) =>
    res.json()
  );
  return data;
};

function* asyncFetchDataSuccess() {
  const data = yield call(fetchData);
  yield put(fetchProductsDataSuc(data));
}

function* asyncFetchOneUserSuccess({ payload }) {
  const data = yield call(fetchOneUser, +payload);
  yield put(fetchOneUserById(data));
}

export default function* rootSaga() {
  yield takeLatest("FETCH_DATA", asyncFetchDataSuccess);
  yield takeLatest("FETCH_ONE", asyncFetchOneUserSuccess);
}
