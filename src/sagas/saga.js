import { put, takeLatest, call, select } from "redux-saga/effects";
import {
  fetchProductsDataSuc,
  fetchOneUserById,
  sortDataSuc,
  deleteOneUserSuc,
  editOneUserSuc,
} from "../redux/actions";
import {
  DELETE_ONE_USER_REQ,
  EDIT_ONE_USER_REQ,
  SORT_DATA_REQ,
} from "../redux/constants";
import { getDataFromLS } from "../utilis/getDataFromLS";
import { saveDataToLS } from "../utilis/saveDataToLS";
import { sortDataUtility } from "../utilis/sortData";
import { updateLS } from "../utilis/updateLS";
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

const sortDataUtils = (order, data) => {
  const newArr = sortDataUtility(order, data);
  return newArr;
};

const deleteOneUser = (id) => {
  const DB = getDataFromLS();
  const newDB = DB.filter((e) => e.id !== id);
  updateLS(newDB);
  return newDB;
};

// const editOneUser = id=>{
// };

function* asyncFetchDataSuccess() {
  let data;
  if (!localStorage.getItem("users")) {
    data = yield call(fetchData);
    saveDataToLS(data);
  } else {
    data = getDataFromLS();
  }
  yield put(fetchProductsDataSuc(data));
}

function* asyncFetchOneUserSuccess({ payload }) {
  const data = yield call(fetchOneUser, +payload);
  yield put(fetchOneUserById(data));
}

function* asyncSortData({ payload, data }) {
  const storeData = yield select((store) => store.data);
  // console.log(storeData);
  const sortedData = yield call(sortDataUtils, payload, storeData);
  yield put(sortDataSuc(sortedData));
}

function* asyncDeleteOneUser({ payload, data }) {
  const newData = yield call(deleteOneUser, payload, data);
  yield put(deleteOneUserSuc(newData));
}

// function* asyncEditOneUser({ payload, data }) {
//   const newData = yield call(editOneUser, payload, data);
//   yield put(editOneUserSuc(newData));
// }

export default function* rootSaga() {
  yield takeLatest("FETCH_DATA", asyncFetchDataSuccess);
  yield takeLatest("FETCH_ONE", asyncFetchOneUserSuccess);
  yield takeLatest(SORT_DATA_REQ, asyncSortData);
  yield takeLatest(DELETE_ONE_USER_REQ, asyncDeleteOneUser);
  // yield takeLatest(EDIT_ONE_USER_REQ, asyncEditOneUser);
}
