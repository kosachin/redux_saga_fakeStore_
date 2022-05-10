import {
  FETCH_PRODUCTS_DATA_REQ,
  FETCH_PRODUCTS_DATA_SUC,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_ONE_USER_BY_ID_SUC,
  SORT_DATA_SUC,
  SORT_DATA_REQ,
  DELETE_ONE_USER_SUC,
  DELETE_ONE_USER_REQ,
  EDIT_ONE_USER_SUC,
  EDIT_ONE_USER_REQ,
} from "./constants";

export const fetchProductsDataReq = () => ({
  type: FETCH_PRODUCTS_DATA_REQ,
});
export const fetchProductsDataSuc = (payload) => ({
  type: FETCH_PRODUCTS_DATA_SUC,
  payload,
});

export const fetchProductsDataFail = (payload) => ({
  type: FETCH_PRODUCTS_DATA_FAIL,
  payload,
});

export const fetchOneUserById = (payload) => ({
  type: FETCH_ONE_USER_BY_ID_SUC,
  payload,
});

export const sortDataSuc = (payload) => ({
  type: SORT_DATA_SUC,
  payload,
});

export const sortDataReq = (payload, data) => ({
  type: SORT_DATA_REQ,
  payload,
  data,
});

export const deleteOneUserSuc = (payload) => ({
  type: DELETE_ONE_USER_SUC,
  payload,
});

export const deleteOneUserReq = (payload, data) => ({
  type: DELETE_ONE_USER_REQ,
  payload,
  data,
});

export const editOneUserSuc = (payload) => ({
  type: EDIT_ONE_USER_SUC,
  payload,
});

export const editOneUserReq = (payload, data) => ({
  type: EDIT_ONE_USER_REQ,
  payload,
  data,
});
