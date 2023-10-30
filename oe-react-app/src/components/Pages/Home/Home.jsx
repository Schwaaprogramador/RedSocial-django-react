import React from 'react'
import styled from './Home.module.css';
//import Bienvenida from '../../ToolComponents/Bienvenida/Bienvenida';
import Navbar from '../../ToolComponents/NavBar/Navbar';
import Feed from '../../ToolComponents/Feed/Feed';
import ProfileTab from '../../ToolComponents/ProfileTab/ProfileTab';
import RecentActivity from '../../ToolComponents/RecentActivity/RecentActivity';


function Home() {
  return (
    <div className={styled.container}>
        <Navbar/>
        <div>
          <Feed/>
          <ProfileTab/>
          <RecentActivity/>

        </div>
        
    </div>
  )
}

export default Home;

