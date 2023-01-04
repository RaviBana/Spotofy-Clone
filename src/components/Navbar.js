import React, { useEffect } from 'react'

const Navbar = () => {

    useEffect(()=>{
        let allLi = document.querySelectorAll('#navbar ul li')
        console.log(allLi)

        allLi.forEach((e)=> (
            e.addEventListener('click', classChanging)
        ))

        function classChanging(){
            console.log('clicked')
            allLi.forEach((e)=> e.classList.remove('active'))
            this.classList.add('active')
        }
    })
  return (
    <div id='navbar'>
        <ul>
            <li>Popular</li>
            <li>Albums</li>
            <li>Songs</li>
            <li>Fans</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar