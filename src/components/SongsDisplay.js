import React, { useState } from 'react';
import { Songs } from './SongsList';
import covers from '../covers/1.jpg';
import covers2 from '../covers/2.jpg';
import { BsHeadphones, BsClock, BsHeartFill, BsHeart } from 'react-icons/bs';
import Player from './Player';
import song1 from '../songs/7.mp3'


const SongsDisplay = () => {

    const [songs, setSongs] = useState(Songs)
    const [song, setSong] = useState(songs[0].song)
    const [currentSong, setCurrentSOng] = useState(songs[0].song)
    const [img, setImg] = useState('')
    const [play, setPlay] = useState(false)

    console.log(songs[0].imgSrc)

    function sendSong(song) {
        setSong(song.song)
        setImg(song.imgSrc)
        setCurrentSOng(song)

        let songPlay = !play
        setPlay(songPlay)
    }
    function changeLike(song) {
        song.favourite = !song.favourite
        setSongs([...Songs])
        console.log(songs)
    }

    function ChangeNextSong() {

        let index = songs.findIndex((e) => e.id === currentSong.id)
        console.log('ind', index)
        console.log('before', song)
        console.log('before', songs[index]?.songName)
        if (index >= songs.length - 1) {
            index = 0
        }
        setSong(songs[index + 1].song)
        setImg(songs[index + 1].imgSrc)
        setCurrentSOng(songs[index + 1])
        console.log('after', song)
    }

    function ChangePrevSong() {
        let index = songs.findIndex((e) => e.id === currentSong.id)

        if (index <= 0) {
            index = 0
        }

        setSong(songs[index - 1].song)
        setImg(songs[index - 1].imgSrc)
        setCurrentSOng(songs[index - 1])


    }


    return (
        <>
            <div id='songs'>
                <div id='songtitle'> <p>The List {songs?.length} songs</p> </div>
                <div id='scrollsong'>
                    {
                        songs && songs.map((song, index) => (
                            <div id="songlist" >
                                <p id="sno">{index + 1}</p>
                                <div id="songImg" onClick={() => sendSong(song)}>
                                    <img src={song.imgSrc} alt="hello" />
                                </div>
                                <div id="songName" onClick={() => sendSong(song)}>
                                    <p>{song.songName}</p>
                                    <p>{song.artist}</p>
                                </div>
                                <div id="songlikes">

                                    <div className='listen' ><i><BsHeadphones /></i> <div> 12,159,789</div></div>

                                    <div className='listen'><i><BsClock /></i> <div> 03:04</div></div>

                                    <div id="like" onClick={() => changeLike(song)}>
                                        {
                                            song.favourite ? <i><BsHeartFill /></i> : <i><BsHeart /></i>
                                        }
                                   </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <Player Song={song} Cover={img} songPlay={play} changeNextSong={ChangeNextSong} changePrevSong={ChangePrevSong} />
        </>

    )
}

export default SongsDisplay