import React, { Component } from "react";
import Slider from "react-slick";
import Button from '../Button/Button';

export default class SliderHero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div className='slider-hero'>
        <Slider {...settings}>
          <div>
            <div className="container content">
              <h1>Antecipe o seu FGTS e use seu dinheiro em poucas horas</h1>
              <Button pageName='fgts' buttonSize='btn--large'>Saiba mais</Button>
            </div>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-01.jpg'} alt="Slide" class='image-1' />
          </div>
          <div>
            <div className="container content">
              <h1>Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m</h1>
              <Button buttonSize='btn--large'>Saiba mais</Button>
            </div>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-02.jpg'} alt="Slide" class='image-2' />
          </div>
          <div>
            <div className="container content">
              <h1>Empréstimos consignados com as melhores taxas do mercado</h1>
              <Button pageName='emprestimo' buttonSize='btn--large'>Saiba mais</Button>
            </div>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-03.jpg'} alt="Slide" class='image-3' />
          </div>
        </Slider>
      </div>
    );
  }
}