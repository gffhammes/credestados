import React from 'react';
import { ButtonScroll } from '../Button/Button';
import './FgtsHeader.scss';


function FgtsHeader() {
  return (
    <section id='fgts-header'>
      <div className="container">
        <img className='header-img' src={process.env.PUBLIC_URL + '/images/saque-fgts.png'} alt="Saque FGTS" />
        <h1>Antecipe as parcelas do seu FGTS com as melhores taxas e <strong>receba seu dinheiro em poucas horas</strong></h1>
        <ButtonScroll sectionName='fgts-simulador' buttonSize='btn--large'>Simular</ButtonScroll>
      </div>
    </section>
  )
}

export default FgtsHeader