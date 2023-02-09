import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import "./style.css"
import { useState } from 'react';

export const Menu = () => {

  const [active, setActive] = useState(false);

  const handleClickActiveButton = () => {
    setActive((active) => !active)
  }
  return (
    <header id='inicio' className={active ? 'activeBackground' : ''}>

      <HiMenuAlt4 className={active ? 'off-button' : 'active-button'} onClick={handleClickActiveButton} />
      <HiOutlineX className={active ? 'active-button' : 'off-button'} onClick={handleClickActiveButton} />

      <nav>
        <ul className={active ? 'active' : 'menu-list'}>
          <li className='list-item' onClick={handleClickActiveButton}><a href="#home">Inicio</a></li>
          <li className='list-item' onClick={handleClickActiveButton}><a href="#about">Sobre</a></li>
          <li className='list-item' onClick={handleClickActiveButton}><a href="#projects">Projetos</a></li>
          <li className='list-item' onClick={handleClickActiveButton}><a href="#services">Serviços</a></li>
          <li className='list-item' onClick={handleClickActiveButton}><a href="#contact">Contato</a></li>
        </ul>
      </nav>

    </header >
  )
}
