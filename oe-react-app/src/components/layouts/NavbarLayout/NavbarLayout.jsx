import React from 'react'

//import Bienvenida from '../../ToolComponents/Bienvenida/Bienvenida';
import Navbar from '../../ToolComponents/NavBar/Navbar';
import { Outlet } from 'react-router-dom'

function NavbarLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default NavbarLayout;

