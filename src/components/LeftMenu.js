import React from 'react';
import '../styles/leftmenu.css'
import {FaSpotify  } from 'react-icons/fa'
import {BsThreeDots,BsSearch } from 'react-icons/bs'
import LeftMenuItem from './LeftMenuItem';
import Playlist from './Playlist';
import Track from './track';

const LeftMenu = () => {
  return (
    <div id='leftmenu'>
       <div id="topbar">
        <i> <FaSpotify/></i>
        <p>Spotify</p>
        <i><BsThreeDots/></i>
       </div>
       <div id="search">
        <i><BsSearch/></i>
        <input type="text" placeholder='Search...'/>
       </div>

       <LeftMenuItem/>
       <Playlist/>
       <Track/>
        
        </div>
    
  )
}

export default LeftMenu