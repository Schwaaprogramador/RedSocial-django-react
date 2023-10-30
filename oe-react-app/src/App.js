
import styled from "./App.module.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Profile from "./components/Pages/Profile/Profile";
import NavbarLayout from "./components/layouts/NavbarLayout/NavbarLayout";

function App() {

  return (
    <div className={styled.app}>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/inicio" element={<NavbarLayout />}>

          <Route exact path="/inicio/login" element={<Login />} />
          <Route exact path="/inicio/register" element={<Register />} />
          <Route exact path="/inicio/profile" element={<Profile />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
