import React from 'react'
import {GoDiffAdded} from 'react-icons/go';
import {MdDeleteOutline} from 'react-icons/md';
import {TbPlaylist} from 'react-icons/tb';
import { Songs } from './songs';

const Playlist = () => {
    const songs = Songs
  return (
    <div id='playlist'>
        <div id="playlisttitle">
            <p>PLAYLIST</p>
            <i><GoDiffAdded/></i>
        </div>

            <div id='playListScroll'>
     {
               songs && songs.map((song)=> (
                    <>
                     <div id="playlistSongs">
                   <i><TbPlaylist/></i>
                   <p>{song.song}</p>
                   <i><MdDeleteOutline/></i>
                   </div>
                    </>
               ))
            }
            </div>
     
    </div>
  )
}

export default Playlist