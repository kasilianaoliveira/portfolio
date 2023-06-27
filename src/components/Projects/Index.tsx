import React from 'react'
import { Button } from '../Button/Index'
import { Title } from '../Title/Index'
import ecommerceImg from "../../assets/ecommerce.png"
import relifeImg from "../../assets/relife.png"
import restaurantImg from "../../assets/restaurant.png"

import GridImg from "../../assets/icon-grid.svg"
import ArrowImg from "../../assets/icon-arrow.svg"
import iconImg from "../../assets/icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./styles.css"
import { Slider } from '../Slider/Index'
import { Card } from './component/card'

export const Projects = () => {
  return (
    <article className='container-projects' id='projects'>
      <span className='title-detail-projects'>PROJETOS</span>
      <Title title='Projetos em destaque' />
      <Slider>
        <SwiperSlide>
          <Card title='E-commerce' description='E-commerce de roupas masculinas e femininas, com filtros, carrinho de compras e integração com stripe.' image={ecommerceImg} link='https://ecommerce-kappa-green.vercel.app/' />
        </SwiperSlide>

        <SwiperSlide>
          <Card title='Relife' description='Este projeto foi desenvolvido durante um bootcamp, visando auxiliar as pessoas a encontrarem doadores de órgãos de forma mais rápida. Existem dois tipos de cadastro: o de doadores e o de receptores. Além disso, há também o cadastro de instituições, responsáveis por administrar a conexão entre os dois tipos de usuários.' image={relifeImg} link='https://relife-lyart.vercel.app' />
        </SwiperSlide>

        <SwiperSlide>
          <Card title='Restaurante' description='Nesta aplicação você pode adicionar os lanches que preferir no carrinho' image={restaurantImg} link='https://restaurant-bay-eta.vercel.app' />
        </SwiperSlide>
      </Slider>
      {/* <Card /> */}

      <Button title='Repositórios no github' hrefOption='https://github.com/kasilianaoliveira' />
      <img src={iconImg} alt="detalhe" className='detail-project' />

    </article>


  )
}
