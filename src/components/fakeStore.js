import { Link } from "react-router-dom";
import fakeStoreHoc from "../hoc/fakeStore";
const FakeStore = ({
  data,
  handleSortData,
  order,
  handleDeleteOneUser,
  handleEditOneUser,
}) => {
  return (
    <div>
      <h1>Store</h1>
      {data?.length > 0 && (
        <button onClick={handleSortData}>{!order ? "INC" : "DEC"}</button>
      )}
      <div>
        {data?.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <Link to={`/${e.id}`}>{e.name.firstname}</Link>
              <button onClick={() => handleDeleteOneUser(e.id)}>Delete</button>
              {/* <button onClick={() => handleEditOneUser(e.id)}>Edit</button> */}

            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default fakeStoreHoc(FakeStore);
