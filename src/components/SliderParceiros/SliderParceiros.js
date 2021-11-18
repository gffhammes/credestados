import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderParceiros extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      //autoplay: true,
    };
    return (
      <div className='slider-parceiros'>
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/parceiro-01.png'} alt="Parceiro" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/parceiro-02.png'} alt="Parceiro" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/parceiro-03.png'} alt="Parceiro" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/parceiro-04.png'} alt="Parceiro" />
          </div>
        </Slider>
      </div>
    );
  }
}