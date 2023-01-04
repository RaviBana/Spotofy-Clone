import React from 'react';
import {MdOutlineTrackChanges, MdAudiotrack, MdMonitor} from 'react-icons/md';
import {GiSpeaker} from 'react-icons/gi'



const Track = () => {


  return (
    <div id='track'>
        <div id="trackTitle">
            <i><MdOutlineTrackChanges/></i>
            <div id='songname'>
                <p>Sample Name</p>
                <p>Artist</p>
            </div>
        </div>
        <div id="trackProgress">

        

            <i><GiSpeaker/></i>
            <input type="range"/>
            <i><MdAudiotrack/></i>
            <i><MdMonitor/></i>
        </div>
    </div>
  )
}

export default Track