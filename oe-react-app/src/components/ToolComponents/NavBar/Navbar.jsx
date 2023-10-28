import React from 'react'
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';
const Navbar = () => {
  return (
    <div>
      <Link to="/register" className={styled.link}> register </Link>
      <Link to="/login" className={styled.link}> login </Link>
      <Link to="/profile" className={styled.link}> profile </Link>
      <Link to="/" className={styled.link}> hOME </Link>
    </div>
  )
}

export default Navbar
