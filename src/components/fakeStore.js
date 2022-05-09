import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { compose, lifecycle, withHandlers, withProps } from "recompose";

const FakeStore = ({ data }) => {
  return (
    <div>
      <h1>Store</h1>
      <div>
        {data?.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <Link to={`/${e.id}`}>{e.name.firstname}</Link>
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
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
