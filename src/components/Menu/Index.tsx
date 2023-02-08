import React from 'react'
import "./style.css"
import { useState } from 'react'

export const Menu = () => {
  return (
    <header id='inicio'>
      <nav>
        <ul className='menu-list'>
          <li className='list-item'><a href="#home">Inicio</a></li>
          <li className='list-item'><a href="#about">Sobre</a></li>
          <li className='list-item'><a href="#projects">Projetos</a></li>
          <li className='list-item' ><a href="#services">Serviços</a></li>
          <li className='list-item'><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header >
  )
}
