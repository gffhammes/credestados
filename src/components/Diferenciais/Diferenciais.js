import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import IconText from '../IconText/IconText';
import './Diferenciais.scss';


function Diferenciais() {
  return (
    <section className='padding--default bg--light-grey' id='diferenciais'>
      <div className="container">
        <SectionTitle title='Especialistas em serviços financeiros' subTitle='DIFERENCIAIS' alignment='align--center'/>
        <IconText
          iconPath='/images/icone-01.png'
          title='Lorem ipsum'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque.'
        />
        <IconText
          iconPath='/images/icone-02.png'
          title='Lorem ipsum'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque.'
        />
        <IconText
          iconPath='/images/icone-03.png'
          title='Lorem ipsum'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque.'
        />
        <IconText
          iconPath='/images/icone-04.png'
          title='Lorem ipsum'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque.'
        />
        <Button>Fale conosco</Button>
      </div>
    </section>
  )
}

export default Diferenciais
