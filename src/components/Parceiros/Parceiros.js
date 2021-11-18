import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import SliderParceiros from '../SliderParceiros/SliderParceiros';
import './Parceiros.scss';


function Parceiros() {
  return (
    <section className='padding--default' id='parceiros'>
      <div className="container">
        <SectionTitle title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' subTitle='PARCEIROS' alignment='align--left'/>
        <SliderParceiros/>
      </div>
    </section>
  )
}

export default Parceiros
