import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose, lifecycle, withHandlers, withProps } from "recompose";

const User = ({ id, data }) => {
  return (
    <div>
      <h3>{data.id}</h3>
      <h3>{data.email}</h3>
      <h3>{data.username}</h3>
      <h3>{data.name?.firstname}</h3>
      <h3>{data.name?.lastname}</h3>
    </div>
  );
};
const enhancer = compose(
  withProps(() => {
    const { id } = useParams();
    return { id };
  }),
  connect(
    (store) => ({
      data: store.data,
    }),
    (dispatch) => ({
      fetchUserById: (id) => {
        dispatch({ type: "FETCH_ONE", payload: id });
      },
    })
  ),
  withHandlers({
    handleFetchOneUserById:
      ({ fetchUserById }) =>
      (id) => {
        fetchUserById(id);
      },
  }),
  lifecycle({
    componentDidMount() {
      const { id, handleFetchOneUserById } = this.props;
      handleFetchOneUserById(id);
    },
  })
);
export default enhancer(User);
