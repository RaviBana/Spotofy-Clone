import React from 'react'
import artist from '../images/artist.jpg';
import check from '../images/check.png';
import { BsThreeDots, BsHeadphones, BsCheckLg} from 'react-icons/bs'

const Banner = () => {
    return (

        <div id="banner">

            <img src={artist} alt="" />
            <div id='topbanner'>
                <p> Home <span>/Popular Artist</span></p>
                <i><BsThreeDots /></i>
            </div>

            <div id='bottombanner'>

                <div id='leftbottom'>
                                <div id='firstbottom'>
                                    <h1>A-Ha</h1>
                                    <div id='imgDiv'>
                                    <img src={check} alt="" />
                                    </div>
                                   
                                </div>

                                <div id='secondbottom'>
                                    <i><BsHeadphones /></i>
                                    <p>11,130,1245</p>
                                    <p>monthly listeners</p>
                                </div>
                </div>

                <div id="rightbottom">
                            <a href="">Play</a>
                            <a href="">
                                <i><BsCheckLg/></i>
                                Following
                            </a>
                </div>

            </div>

        </div>
    )
}

export default Banner