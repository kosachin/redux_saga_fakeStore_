import {
  FETCH_PRODUCTS_DATA_SUC,
  FETCH_PRODUCTS_DATA_FAIL,
  FETCH_PRODUCTS_DATA_REQ,
  FETCH_ONE_USER_BY_ID_SUC,
  SORT_DATA_SUC,
  DELETE_ONE_USER_SUC,
} from "./constants";

const init = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_DATA_REQ:
      return { ...store, loading: true };
    case FETCH_PRODUCTS_DATA_SUC:
      return { ...store, data: payload, loading: false };
    case FETCH_PRODUCTS_DATA_FAIL:
      return { ...store, loading: false, error: payload.message };
    case FETCH_ONE_USER_BY_ID_SUC:
      return { ...store, data: payload };
    case SORT_DATA_SUC:
      return { ...store, data: payload };
    case DELETE_ONE_USER_SUC:
      return { ...store, data: payload };
    default:
      return store;
  }
};
export default reducer;
