import React from 'react'
import profileImg from "../../assets/profile.png";
import iconImg from "../../assets/icon.svg";

import { Title } from '../Title/Index';
import "./styles.css"
export const About = () => {
  return (
    <article className='container-about' id='about'>
      <div className='about'>
        <span className='title-detail'>SOBRE</span>

        <img src={profileImg} alt="Foto da Kasiliana" />
        <div className='content-about'>
          <Title title='Sobre' />
          <p>Olá, meu nome é Kasiliana. Estou cursando sistemas de informação na UFC.  Estudo programação há 4 anos e busco sempre me aprimorar mais nas tecnologias. Meu foco é desenvolvimento web no front-end com <span className='tech-react'> ReactJs</span>, <span className='tech-typescript'>typescript</span> e atualmente estudando <span className='tech-next'>Next.js</span>.</p>
        </div>
        <img src={iconImg} alt="detalhe" className='detail' />

      </div>
    </article>
  )
}
