import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import CardEmprestimo from '../CardEmprestimo/CardEmprestimo';
import './Emprestimo.scss';


function Emprestimo() {
  return (
    <section className='padding--default' id='emprestimo'>
      <div className="container">
        <SectionTitle title='As melhores condições de crédito para você' subTitle='EMPRÉSTIMO' alignment='align--left'/>
        <div className="content">
          <CardEmprestimo imgPath='/images/emprestimo-01.jpg' text='APOSENTADOS INSS' />
          <CardEmprestimo imgPath='/images/emprestimo-02.jpg' text='PENSIONISTAS INSS' />
          <CardEmprestimo imgPath='/images/emprestimo-03.jpg' text='SERVIDORES PÚBLICOS' />
          <CardEmprestimo imgPath='/images/emprestimo-04.jpg' text='FORÇAS ARMADAS' />
          <CardEmprestimo imgPath='/images/emprestimo-05.jpg' text='CARTÃO DE CRÉDITO CONSIGNADO' />
          <CardEmprestimo imgPath='/images/emprestimo-06.jpg' text='PORTABILIDADE DE CRÉDITO' />
        </div>
        <img src={process.env.PUBLIC_URL + '/images/pattern-02.png'} alt="padrao" className='padrao padrao3'/>
        <Button onClick={() => window.open("https://wa.me/554797527024", "_blank")}> <i className="fab fa-whatsapp" /> Simular agora</Button>
      </div>
    </section>
  )
}

export default Emprestimo
