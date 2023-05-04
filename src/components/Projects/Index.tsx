import React from 'react'
import { Button } from '../Button/Index'
import { Title } from '../Title/Index'
import ecommerceImg from "../../assets/ecommerce.png"
import relifeImg from "../../assets/relife.png"
import restaurantImg from "../../assets/restaurant.png"

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
          <img src={ecommerceImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>E-commerce</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              Desenvolvimento
            </span>
            {/* <p>React - typescript - firebase</p> */}
          </div>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='https://ecommerce-kappa-green.vercel.app/' />
          </div>
        </div>
        <div className="card">
          <img src={relifeImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>Relife</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              Desenvolvimento
            </span>
          </div>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='https://relife-lyart.vercel.app/' />
          </div>
        </div>
        <div className="card">
          <img src={restaurantImg} alt="Imagem de um projeto desenvolvido" className='img-card' />
          <div className='card-infos'>
            <h3>Restaurante online</h3>
            <span className='info'>
              <img src={GridImg} alt="" />
              Desenvolvimento
            </span>
          </div>
          <div className='card-open-project'>
            <span className='open-project-item'>
              Veja mais
              <img src={ArrowImg} alt="" />
            </span>
            <Button title="Abrir projeto" hrefOption='https://restaurant-bay-eta.vercel.app/' />
          </div>
        </div>
      </div>
      <Button title='Repositórios no github' hrefOption='https://github.com/kasilianaoliveira' />
      <img src={iconImg} alt="detalhe" className='detail-project' />

    </article>
  )
}
