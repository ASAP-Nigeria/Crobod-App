import { useRef } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }
  
  return (
    <section id='home'>
      <header>
        <div className="logo"><img src="/logo.png" alt="" /></div>
        <nav ref={navRef}>
          <ul>
            <li className='dropdown'>Solutions <FontAwesomeIcon icon={faAngleDown} className="nav-icon"/></li>
            <li>About</li>
            <li>Loans</li>
            <div className="nav-mobile">
              <button>Log in</button>
            </div>
          </ul>
          <FontAwesomeIcon icon={faXmark} className="mark"onClick={showNavbar}/>
        </nav>
        <FontAwesomeIcon icon={faBars} className="bars" onClick={showNavbar}/>
          <div className="nav-btn">
            <button>Log in</button>
          </div>
      </header>
      <div className="home-text">
        <h1>Need funds for International Purchases?</h1>
        <p>Africa's first import financing tech platform designed for small and medium <br />
          importers to help with financing their international <br />purchases and cross border logistics.
        </p>
        <div className="home-btns">
          <button className='btn1'>Get started</button>
          <button className='btn2'>Download app</button>
      </div>
      </div>
    </section>
  )
}
