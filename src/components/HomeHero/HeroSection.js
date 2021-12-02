import React from 'react';
import './HeroSection.scss';
import Button from '../Button/Button';
import SliderHero from '../SliderHomeHeader/SliderHero';

function HeroSection() {
  return (
    <section className="hero-container" id='hero'>
      <SliderHero />
    </section>
  )
}

export default HeroSection
