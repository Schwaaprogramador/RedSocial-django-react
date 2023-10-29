import React from 'react'
import styled from './Home.module.css';
//import Bienvenida from '../../ToolComponents/Bienvenida/Bienvenida';
import Navbar from '../../ToolComponents/NavBar/Navbar';
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className={styled.container}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home;

