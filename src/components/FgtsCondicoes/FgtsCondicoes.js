import React, {useState} from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import Condicoes from '../Condicoes/Condicoes';
import './FgtsCondicoes.scss';

function FgtsCondicoes() {
  return (
    <section className='padding--default' id='fgts-condicoes'>
      <div className="container">
        <SectionTitle title='Confira as condições para contratar a Antecipação Saque-Aniversário com FGTS' subTitle='CONDIÇÕES' alignment='align--left'/>        
        <div className="container--condicoes">
          <Condicoes text='Ser maior de 18 anos ou emancipado'/>
          <Condicoes text='Ter situação regular com a Receita Federal'/>
          <Condicoes text='Possuir conta corrente ou poupança'/>
          <Condicoes text='Ter saldo do FGTS em conta ativa ou inativa'/>
          <Condicoes text='Ser optante da modalidade Saque-Aniversário do FGTS'/>          
        </div>
        <Button><i class="fab fa-whatsapp"/> Fale conosco</Button>

      </div>     
    </section>
  )
}

export default FgtsCondicoes
