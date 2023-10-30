import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';
import { SlMagnifier } from "react-icons/sl";
import { SlFire } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className={styled.container}>

      <div className={styled.logoContainer}>
        <SlFire className={styled.fireIcon}/>
        <p>!OE!</p>
      </div>


      <div>

        <Link to="/inicio/register" className={styled.link}> Registrarse </Link>
        <Link to="/inicio/login" className={styled.link}> Logeo  </Link>
        <Link to="/inicio/profile" className={styled.link}> Perfil </Link>
        <Link to="/" className={styled.link}> Inicio </Link>

      </div>

      <div className={styled.searchContainer}>
        <input type='text' placeholder='Buscar'/>
        <button className={styled.searchButton}>

          <SlMagnifier className={styled.searchIcon}/>

        </button>
      </div>

      

    </div>
  )
}

export default Navbar
