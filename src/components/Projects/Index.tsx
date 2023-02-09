import React from 'react'
import { Button } from '../Button/Index'
import { Title } from '../Title/Index'
import projetoImg from "../../assets/projeto.png"
import GridImg from "../../assets/icon-grid.svg"
import ArrowImg from "../../assets/icon-arrow.svg"
import iconImg from "../../assets/icon.svg";


import "./styles.css"

export const Projects = () => {
  return (
    <article className='container-projects' id='projects'>
      <span className='title-detail-projects'>PROJETOS</span>
      <Title title='Projetos em destaque' />
      <div className="cards-projects">
        <div className="card">
          <img src={projetoImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>Portfolio website UI</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              UI Design
            </span>
          </div>
          <p>sdfsdd</p>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='teste' />
          </div>
        </div>
        <div className="card">
          <img src={projetoImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>Portfolio website UI</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              UI Design
            </span>
          </div>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='teste' />
          </div>
        </div>
        <div className="card">
          <img src={projetoImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>Portfolio website UI</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              UI Design
            </span>
          </div>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='teste' />
          </div>
        </div>
      </div>
      <Button title='Repositórios no github' hrefOption='https://github.com/kasilianaoliveira' />
      <img src={iconImg} alt="detalhe" className='detail-project' />

    </article>
  )
}
