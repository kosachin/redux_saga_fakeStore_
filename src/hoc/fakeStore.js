import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import {
  sortDataReq,
  deleteOneUserReq,
  editOneUserReq,
} from "../redux/actions";

const enhancer = compose(
  withState("order", "setOrder", false),
  connect(
    (store) => ({
      data: store.data,
    }),
    (dispatch) => ({
      fetchDataSuccess: () => dispatch({ type: "FETCH_DATA" }),
      sortDataSuccess: (payload, setOrder, data) => {
        dispatch(sortDataReq(payload, data));
        setOrder((prev) => !prev);
      },
      deleteOneUserSuccess: (id, data) => dispatch(deleteOneUserReq(id, data)),
      editOneUserSuccess: (id, data) => dispatch(editOneUserReq(id, data)),
    })
  ),
  withHandlers({
    handleFetchDataSuccess:
      ({ fetchDataSuccess }) =>
      () =>
        fetchDataSuccess(),
    handleSortData:
      ({ sortDataSuccess, order, setOrder, data }) =>
      () => {
        sortDataSuccess(order, setOrder, data);
      },
    handleDeleteOneUser:
      ({ deleteOneUserSuccess, data }) =>
      (id) => {
        deleteOneUserSuccess(id, data);
      },
    handleEditOneUser:
      ({ editOneUserSuccess, data }) =>
      (id) =>
        editOneUserSuccess(id, data),
  }),
  lifecycle({
    componentDidMount() {
      const { handleFetchDataSuccess } = this.props;
      handleFetchDataSuccess();
    },
  })
);
export default enhancer;
