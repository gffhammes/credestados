import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './Fgts.scss';


function Fgts() {
  return (
    <section className='padding--default bg--light-grey' id='fgts'>
      <div className="container">
        <SectionTitle title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' subTitle='FGTS' alignment='align--left'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tempore provident consequatur exercitationem harum et voluptatem accusantium, unde enim aliquid, odio, dolores animi id. Eum sed officia nisi mollitia doloremque?</p>
        <Button>Fale conosco</Button>
      </div>
    </section>
  )
}

export default Fgts
