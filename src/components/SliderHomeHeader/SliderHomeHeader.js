import React, { useState } from 'react';
import './SliderHomeHeader.scss';
import SliderContent from './SliderContent';
import Arrow from './Arrow';

/** 
* @function SliderHomeHeader
*/

const SliderHomeHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === 2) {
      setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    } else {
      setState({
        ...state,
        translate: (activeIndex + 1) * windowWidth,
        activeIndex: activeIndex + 1,
      })
    }
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      setState({
        ...state,
        translate: 2 * windowWidth,
        activeIndex: 2,
      });
    } else {
      setState({
        ...state,
        translate: (activeIndex - 1) * windowWidth,
        activeIndex: activeIndex - 1,
      })
    }
  }

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  return <div className='slider-container'>
    <Arrow direction='left' handleClick={prevSlide}/>
    <SliderContent
      translate={translate}
      transition={transition}
      width={(windowWidth * 3)}
    />
    <Arrow direction='right' handleClick={nextSlide}/>
  </div>
}

export default SliderHomeHeader



/*import React, { Component } from "react";
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
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div className='slider-hero'>
        <Slider {...settings}>
          <div>
            <div className="container content">
              <h1>Antecipe o seu FGTS e receba seu dinheiro em poucas horas</h1>
              <Button pageName='fgts' buttonSize='btn--large'>Saiba mais</Button>
            </div>
            <div className="cover"></div>
            <img src={process.env.PUBLIC_URL + '/images/hero-01.jpg'} alt="Slide" class='image-1' />
          </div>
          <div>
            <div className="container content">
              <h1>Portabilidade: reduza sua parcela com taxas a partir de 1,15% a.m</h1>
              <Button onClick={() => window.open(`https://wa.me/554791515234?text=${encodeURI("Olá! Gostaria de mais informações sobre portabilidade de crédito!")}`, "_blank")} buttonSize='btn--large'>Saiba mais</Button>
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
}*/