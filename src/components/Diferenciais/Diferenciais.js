import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import IconText from '../IconText/IconText';
import './Diferenciais.scss';


function Diferenciais() {
  return (
    <section className='padding--default bg--light-grey' id='diferenciais'>
      <div className="container">
        <SectionTitle title='Especialistas em serviços financeiros' subTitle='DIFERENCIAIS' alignment='align--left'/>
        <div className="content">
          <IconText
            iconPath='/images/icone-06.png'
            title='Sem consulta ao Serasa'
            text='Não consultamos o SPC/Serasa para liberar crédito (exceto crédito pessoal).'
          />
          <IconText
            iconPath='/images/icone-02.png'
            title='As melhores taxas'
            text='Nosso objetivo é ajudar você a alcançar os seus objetivos. Oferecemos sempre as melhores condições.'
          />
          <IconText
            iconPath='/images/icone-03.png'
            title='Atendimento diferenciado'
            text='Nossa equipe de consultores está preparada e à disposição para te atender da melhor forma.'
          />
          <IconText
            iconPath='/images/icone-01.png'
            title='Dinheiro fácil e rápido'
            text='Com a CredEstados você recebe seu crédito em até 24h sem nem sair de casa.'
          />
        </div>
        <Button onClick={() => window.open("https://wa.me/554797527024", "_blank")}><i className='fab fa-whatsapp'/> Fale conosco</Button>
      </div>
    </section>
  )
}

export default Diferenciais
