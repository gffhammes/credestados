import React, {useState} from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import IconText from '../IconText/IconText';
import './FgtsVantagens.scss';

function FgtsVantagens() {
  return (
    <section className='padding--default bg--light-grey' id='fgts-vantagens'>
      <div className="container">
        <SectionTitle title='Conheça as vantagens da antecipação do Saque-Aniversário com a CredEstados' subTitle='VANTAGENS' alignment='align--left'/>        
        <div className="container--vantagens">
          <IconText
            iconPath='/images/icone-01.png'
            title='Taxas a partir de 1,59% a.m.'
            text='Crédito pessoal com as melhores condições no mercado.'
          />

          <IconText
            iconPath='/images/icone-02.png'
            title='Contrate a partir de R$ 300,00'
            text='Fácil contratação e pagamento rápido na conta, tudo digital.'
          />


          <IconText
            iconPath='/images/icone-07.png'
            title='Menos dívidas'
            text='Zero parcelas mensais, o desconto é feito anualmente no FGTS.'
          />

          <IconText
            iconPath='/images/icone-06.png'
            title='Sem consulta ao Serasa'
            text='Não consultamos o SPC/Serasa para liberar crédito (exceto crédito pessoal).'
          />

        </div>
        <Button onClick={() => window.open(`https://wa.me/554791515234?text=${encodeURI("Olá, gostaria de uma simulação de saque-aniversário do FGTS!")}`, "_blank")}><i class="fab fa-whatsapp"/> Fale conosco</Button>
      </div>
      <div className="container--img">
      </div>
    </section>
  )
}

export default FgtsVantagens
