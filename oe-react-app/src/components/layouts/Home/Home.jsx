import React from 'react'
import styled from './Home.module.css';
import Bienvenida from '../../ToolComponents/Bienvenida/Bienvenida';
import Navbar from '../../ToolComponents/NavBar/Navbar';


const Home = () => {
  return (
    <div className={styled.container}>
      <div>
        home
      </div>
        <Navbar/>
      <Bienvenida/>
    </div>
  )
}

export default Home
