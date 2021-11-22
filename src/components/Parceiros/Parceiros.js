import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import SliderParceiros from '../SliderParceiros/SliderParceiros';
import './Parceiros.scss';


function Parceiros() {
  return (
    <section className='padding--default' id='parceiros'>
      <div className="container">
        <SectionTitle title='Trabalhamos com as principais instituições financeiras do país' subTitle='PARCEIROS' alignment='align--center'/>
        <SliderParceiros/>
      </div>
    </section>
  )
}

export default Parceiros
