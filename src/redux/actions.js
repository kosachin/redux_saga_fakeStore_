import {
  FETCH_PRODUCTS_DATA_REQ,
  FETCH_PRODUCTS_DATA_SUC,
  FETCH_PRODUCTS_DATA_FAIL,
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
