import React from 'react'
import { Title } from '../Title/Index';
import codeImg from "../../assets/icon-code.svg";
import layersImg from "../../assets/icon-layers.svg";
import iconImg from "../../assets/icon.svg";

import "./styles.css"


export const Services = () => {
  return (
    <article className='container-services' id='services'>
      <div className='content-services'>
        <span className='title-detail-services'>Serviços</span>
        <Title title='Serviços' />
        <div className="cards-services">
          <div className="cards-services-item" >
            <img src={codeImg} alt="" />
            <div>
              <h3>Desenvolvimento</h3>
              <p>Desenvolvo portfólios, landing pages, blogs e muito mais</p>
            </div>
          </div>
          <div className="cards-services-item" >
            <img src={layersImg} alt="" />
            <div>
              <h3>Ui design</h3>
              <p>Faço protótipos de telas de forma que elas sejam nítidas e objetivas para o usuário</p>
            </div>
          </div>
        </div>
        <img src={iconImg} alt="detalhe" className='detail-project-services' />
      </div>
    </article>
  )
}
