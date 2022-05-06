import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";

const FakeStore = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => (
          <h3>{e.name.firstname}</h3>
        ))}
      </div>
    </div>
  );
};
const enhancer = compose(
  connect(
    (store) => ({
      data: store.data,
    }),
    (dispatch) => ({
      fetchDataSuccess: () => dispatch({ type: "FETCH_DATA" }),
    })
  ),
  withHandlers({
    handleFetchDataSuccess:
      ({ fetchDataSuccess }) =>
      () =>
        fetchDataSuccess(),
  }),
  lifecycle({
    componentDidMount() {
      const { handleFetchDataSuccess } = this.props;
      handleFetchDataSuccess();
    },
  })
);
export default enhancer(FakeStore);
