import React from 'react'
import { Button } from '../../../Button/Index'
import ecommerceImg from "../../../../assets/ecommerce.png"
import relifeImg from "../../../../assets/relife.png"
import restaurantImg from "../../../../assets/restaurant.png"
import GridImg from "../../../../assets/icon-grid.svg"
import ArrowImg from "../../../../assets/icon-arrow.svg"
import iconImg from "../../assets/icon.svg";

import './styles.css'
import { SwiperSlide } from 'swiper/react'

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}
export const Card = ({title,image, description, link}: CardProps) => {
  return (

    <div className="card">
      <img src={image} alt="Imagem de um projeto desenvolvido" className='img-card' />
      <div className='card-container-infos'>
        <div className='card-infos'>
          <h3>{title}</h3>
          <div className='info'>
            <img src={GridImg} alt="" />
            <span>Desenvolvimento</span>
          </div>

          <div className='card-description'>
            <h4>Descrição</h4>
            <p>{description}</p>
          </div>

          {/* <p>React - typescript - firebase</p> */}
        </div>
        <div className='card-open-project'>
          <span className='open-project-item'>
            Veja mais
            <img src={ArrowImg} alt="" />
          </span>
          <Button title="Abrir projeto" hrefOption={link} />
        </div>
      </div>
    </div>

  )
}

// Descrição

// • React Native
// • Redux