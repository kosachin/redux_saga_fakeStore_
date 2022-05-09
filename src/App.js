import { Route, Routes } from "react-router-dom";
import "./App.css";
import FakeStore from "./components/fakeStore";
import User from "./components/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FakeStore />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
