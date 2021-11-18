import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './Diferenciais.scss';


function Diferenciais() {
  return (
    <section className='padding--default bg--light-grey'>
      <div className="container">
        <SectionTitle title='Especialistas em serviços financeiros' subTitle='DIFERENCIAIS' alignment='align--center'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tempore provident consequatur exercitationem harum et voluptatem accusantium, unde enim aliquid, odio, dolores animi id. Eum sed officia nisi mollitia doloremque?</p>
        <Button>Fale conosco</Button>
      </div>
    </section>
  )
}

export default Diferenciais
