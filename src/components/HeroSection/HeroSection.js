import React from 'react';
import './HeroSection.scss';
import Button from '../Button/Button';
import SliderHero from '../SliderHero/SliderHero';

function HeroSection() {
  return (
    <section className="hero-container" id='hero'>
      <SliderHero />
      <div className='btn-container container'>
        <Button pageName='emprestimo' buttonSize='btn--large'>Empréstimo</Button>
        <Button pageName='fgts' buttonSize='btn--large'>Saque FGTS</Button>
      </div>
    </section>
  )
}

export default HeroSection