import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './EmprestimoHeader.scss';


function EmprestimoHeader() {
  return (
    <section id='emprestimo-header'>
      <div className="container">
        <img className='header-img' src={process.env.PUBLIC_URL + '/images/emprestimo-consignado.png'} alt="Empréstimo consignado" />
        <h1>As melhores condições do mercado para <strong>empréstimo consignado</strong></h1>
        <Button buttonSize='btn--large'><i class="fab fa-whatsapp"/> Simular</Button>
      </div>
    </section>
  )
}

export default EmprestimoHeader