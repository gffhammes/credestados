import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './EmprestimoSobre.scss';


function EmprestimoSobre() {
  return (
    <section className='padding--default bg--light-grey' id='emprestimo-sobre'>
      <div className="container">
        <SectionTitle title='O que é o Emprestimo Consignado?' subTitle='SOBRE' alignment='align--center'/>
        <img className='img-content' src={process.env.PUBLIC_URL + '/images/emprestimo-sobre.png'} alt="Empréstimo consignado" />
        <p>
          O empréstimo consignado é uma modalidade de crédito destinada a aposentados, pensionistas e servidores públicos. <br/><br/>No consignado, o valor das parcelas de seu empréstimo é descontado automaticamente de sua folha de pagamento ou benefício do INSS.
        </p>
        <Button onClick={() => window.open("https://wa.me/554797527024", "_blank")}> <i className="fab fa-whatsapp" /> Simular</Button>
      </div>
    </section>
  )
}

export default EmprestimoSobre