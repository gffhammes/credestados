import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './QuemSomos.scss';


function QuemSomos() {
  return (
    <section className='padding--default' id='quem-somos'>
      <div className="container">
        <SectionTitle title='Conheça a CredEstados' subTitle='QUEM SOMOS' alignment='align--left'/>
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tempore provident consequatur exercitationem harum et voluptatem accusantium, unde enim aliquid, odio, dolores animi id. Eum sed officia nisi mollitia doloremque?</p>
        <Button>Fale conosco</Button>
      </div>
    </section>
  )
}

export default QuemSomos
