import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderHero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div className='slider-hero'>
        <Slider {...settings}>
          <div>
            <h1 className='container h1-1'>Antecipe o seu FGTS e use seu dinheiro em poucas horas</h1>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-01.jpg'} alt="Slide" class='image-1' />
          </div>
          <div>
            <h1 className='container h1-2'>Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m</h1>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-02.jpg'} alt="Slide" class='image-2' />
          </div>
          <div>
            <h1 className='container h1-3'>Empréstimos consignados com as melhores taxas do mercado</h1>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-03.jpg'} alt="Slide" class='image-3' />
          </div>
        </Slider>
      </div>
    );
  }
}