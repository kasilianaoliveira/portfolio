import React, { useEffect } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { useState } from 'react';
import LogoImg from "../../assets/letras.svg"
import "./style.css"

export const Menu = () => {

  const [activeMobile, setActiveMobile] = useState(false);

  const handleClickActiveButton = () => {
    setActiveMobile((activeMobile) => !activeMobile)
  }

  const [sidebar, setSidebar] = useState(false)

  return (
    <header id='inicio' className={activeMobile ? 'header-active' : 'header'}>

      <div className="container-header">
        <div className={activeMobile ? 'logo-inactive' : 'logo'}>
          <a href='/'>
            <img src={LogoImg} alt="logo" />
          </a>
        </div>
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
      </div>

    </header >
  )
}
