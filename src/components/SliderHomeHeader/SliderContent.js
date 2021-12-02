import React from 'react';
import Slide from './Slide';

const SliderContent = ({
  translate,
  transition,
  width
}) => {
  return (
    <div
      className='slider-content'
      style={{
        height: "calc(100vh - var(--menu-height))",
        transform: `translateX(-${translate}px)`,
        display: "flex",
        width: `${width}px`
      }}
    >
      <Slide
        h1='Antecipe o seu FGTS e receba seu dinheiro em poucas horas'
        imgPath='/images/hero-01.jpg'
        buttonText='Saber mais'
        buttonTarget='fgts'
      />
      <Slide
        h1='Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m'
        imgPath='/images/hero-02.jpg'
        buttonText='Saber mais'
        buttonTarget='/'
      />
      <Slide
        h1='Empréstimos consignados com as melhores taxas do mercado'
        imgPath='/images/hero-03.jpg'
        buttonText='Saber mais'
        buttonTarget='emprestimo'
      />
    </div>
  )
}

export default SliderContent
