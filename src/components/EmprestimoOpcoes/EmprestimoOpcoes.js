import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import LinkEmprestimo from '../LinkEmprestimo/LinkEmprestimo';
import './EmprestimoOpcoes.scss';


function EmprestimoOpcoes() {
  return (
    <section className='padding--default bg--light-grey' id='emprestimo-opcoes'>
      <div className="container">
        <SectionTitle title='Selecione o que você deseja fazer com seu empréstimo!' subTitle='OPÇÕES' alignment='align--center'/>
        <div className="content">
          <LinkEmprestimo text='comprar um apartamento'/>
          <LinkEmprestimo text='pagar minhas dívidas'/>
          <LinkEmprestimo text='reformar minha casa'/>
          <LinkEmprestimo text='comprar um carro'/>
          <LinkEmprestimo text='viajar'/>
          <LinkEmprestimo text='complementar a renda'/>
          <LinkEmprestimo text='abrir meu próprio negócio'/>
          <LinkEmprestimo text='emergência de saúde'/>
        </div>
      </div>   
    </section>
  )
}

export default EmprestimoOpcoes
