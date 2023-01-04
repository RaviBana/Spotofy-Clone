import React,{useEffect, useRef, useState} from 'react';
import { BsHeartFill, BsHeart, BsDownload } from 'react-icons/bs';
import {AiOutlineShareAlt, AiOutlineBackward, AiOutlineFastBackward, AiOutlinePlayCircle, AiOutlinePause, AiFillForward, AiOutlineFastForward } from 'react-icons/ai';
import covers from '../covers/1.jpg';


const Player = (props) => {
   const [playing, setPlaying] = useState(false)
   const [duration, setDuration] = useState(0)
    const [current, setCurrent] = useState(0)

   const playerAudio = useRef()
   const progressBar = useRef()
   const animationRef = useRef()

   useEffect(()=>{
    // console.log('player', playerAudio)
    // console.log('playersong', props.Song)
    // console.log( progressBar.current.value)
    setPlaying(false)
    console.log('props')
    progressBar.current.value = 0

   
   },[props])



   useEffect(()=>{
    setPlaying(playing)
    console.log('withoutprops')
    progressBar.current.value = 0
    
},[])


   function durationFormat(inputTime){
        inputTime = inputTime?inputTime:0;
      let minute = Math.floor(inputTime/60);
       let second =Math.floor(inputTime%60);
       let secFormat = second<10?`0${second}`:`${second}`
       let minFormat = minute<10?`0${minute}`:`${minute}`

       return `${minFormat}:${secFormat}`

   }

   function playSong(){
        const playValue = !playing
        if(playValue){
            playerAudio.current.play()
            console.log( playerAudio.current.duration)

         
           animationRef.current = requestAnimationFrame(whilePlaying);
        }else{
            playerAudio.current.pause()
            console.log( playerAudio.current.currentTime)
        }
        setPlaying(playValue)
   }

   const whilePlaying = () =>{
    const progressBarvalue =  (playerAudio.current.currentTime/playerAudio.current.duration)*100
    progressBar.current.value  = progressBarvalue 
    animationRef.current = requestAnimationFrame(whilePlaying);

    let totalDuration = playerAudio.current.duration
    let currentTime = playerAudio.current.currentTime
    setCurrent(currentTime)
    setDuration(totalDuration)
   }

   function changingProgress(){
    
    // console.log( progressBar.current.value)
    playerAudio.current.currentTime = progressBar.current.value*playerAudio.current.duration/100

   

   }

    return (
        <div id='player'>
            <div id="playerDiv">
                <div id="divImg">
                    <img src={props.Cover?props.Cover:covers} alt="" />
                    <audio src={props?.Song}  preload="metadata" ref={playerAudio}/> 
                                    </div>
                <div id="player1">
                    <div id="playertop">
                        <div id="like">
                            <i><BsHeart /></i>
                            <i><BsHeartFill /></i>
                           <i><BsDownload /></i>
                        </div>
                        <div id='play-btn'>
                            <i><AiOutlineFastBackward /></i>
                            <i><AiOutlineBackward /></i>
                            {  <div id='play-pause' onClick={playSong}>
                          
                          {(playing)? (<i><AiOutlinePause/></i>):<i><AiOutlinePlayCircle /></i>} 
                             
                            
                             </div>
                            }
                           
                            <i><AiFillForward /></i>
                            <i><AiOutlineFastForward /></i>
                        </div>
                        <i><AiOutlineShareAlt/></i>

                    </div>
                    <div id="playerbottom">
                        <div>{durationFormat(current)}</div>
                        <input type="range"  ref={progressBar} onChange={changingProgress}/>
                        <div>{durationFormat(duration)}</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Player