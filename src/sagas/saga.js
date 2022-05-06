import { put, takeLatest, call } from "redux-saga/effects";
import { fetchProductsDataSuc } from "../redux/actions";
const fetchData = (p) => {
  const data = fetch("https://fakestoreapi.com/users").then((res) =>
    res.json()
  );
  return data;
};
function* asyncFetchDataSuccess() {
  const data = yield call(fetchData, 1000);
  yield put(fetchProductsDataSuc(data));
}

export default function* rootSaga() {
  yield takeLatest("FETCH_DATA", asyncFetchDataSuccess);
}
