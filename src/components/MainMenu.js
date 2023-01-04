import React from 'react';
import '../styles/mainmenu.css';
import Banner from './Banner';
import Navbar from './Navbar';
import SongsDisplay from './SongsDisplay';


const MainMenu = () => {
  return (
    <div id='mainmenu'>
     <Banner/>
     <Navbar/>
     <SongsDisplay/>
        </div>
  )
}

export default MainMenu