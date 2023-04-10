import React, { useEffect } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import "./style.css"
import { useState } from 'react';

export const Menu = () => {

  const [activeMobile, setActiveMobile] = useState(false);

  const handleClickActiveButton = () => {
    setActiveMobile((activeMobile) => !activeMobile)
  }

  const [sidebar, setSidebar] = useState(false)

  return (
    <header id='inicio' className={activeMobile ? 'header-active' : 'header'}>

      {/* <HiMenuAlt4 className={activeMobile ? 'off-button' : 'active-button'} onClick={handleClickActiveButton} /> */}
      {/* <HiOutlineX className={activeMobile ? 'active-button outLineX' : 'off-button'} onClick={handleClickActiveButton} /> */}
      {/* className={activeMobile ? 'menu-active' : 'off-menu'}  */}

      <nav className='navigation'>
        <HiMenuAlt4 className={activeMobile ? 'off-menu' : 'menu-active'} onClick={handleClickActiveButton} />
        <HiOutlineX className={activeMobile ? 'menu-active' : 'off-menu'} onClick={handleClickActiveButton} />
        <ul className={activeMobile ? 'menu-items' : 'menu'}>
          <li className='list-item'><a href="#home">Inicio</a></li>
          <li className='list-item'><a href="#about">Sobre</a></li>
          <li className='list-item'><a href="#projects">Projetos</a></li>
          <li className='list-item'><a href="#services">Serviços</a></li>
          <li className='list-item'><a href="#contact">Contato</a></li>
        </ul>
      </nav>

    </header >
  )
}
