import React, { useEffect } from 'react';
import { MenuList } from './menulist';

const LeftMenuItem = () => {
    const MENU = MenuList

    useEffect(()=>{
        let menuClick = document.querySelectorAll('#menuitem p')
        console.log(menuClick)
            menuClick.forEach(element => 
                element.addEventListener('click',classChangeFunction)
            ); 

            function classChangeFunction(){
            menuClick.forEach((e)=>( e.classList.remove('active')));
            console.log(this)
                this.classList.add("active")
            
    }
    },[])
   
        



  return (
    <div id='menubar'>
        <p>MENU</p>{
            // console.log('menu')
            MENU.map((menu)=>(
                <div id="menuitem">
                <i>{menu.icon}</i>
                <p>{menu.name}</p>
               </div>
            ))
        }
    </div>
  )
}

export default LeftMenuItem