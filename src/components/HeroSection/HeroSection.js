import React from 'react';
import './HeroSection.scss';
import Button from '../Button/Button';

function HeroSection() {
  return (
    <section className="hero-container">
      <img src={process.env.PUBLIC_URL + '/images/hero-credestados.jpg'} alt="Hero Background" />
      <div className="cover"></div>
      <div className='container'>
        <h1>As melhores condições para realizar seus sonhos</h1>
        <Button buttonSize='btn--large'>Empréstimo</Button>
        <Button buttonSize='btn--large'>Saque FGTS</Button>
      </div>
    </section>
  )
}

export default HeroSection
