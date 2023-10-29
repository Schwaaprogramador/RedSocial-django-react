
import styled from "./App.module.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Profile from "./components/Pages/Profile/Profile";

function App() {

  return (
    <div className={styled.app}>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
