import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './Fgts.scss';


function Fgts() {
  return (
    <section className='padding--default bg--light-grey' id='fgts'>
      <div className="container">
        <SectionTitle title='Veja quanto você pode retirar do seu fundo de garantia' subTitle='FGTS' alignment='align--left'/>        
          <div className="text">
            <p>
              Antecipe as parcelas anuais do seu Saque-Aniversário.<br/>
              Informe seu saldo e o seu aniversário e conheça as condições.
            </p>
          </div>
            
          <div className="card-simulacao-fgts shadow-2">
            <div className="card-header">            
              <i class="fas fa-piggy-bank"></i>
              <h3>Saque FGTS</h3>
            </div>
            <div className="card-body">
              <div className="body-row valor">
                <span>Saldo FGTS</span>
                <span>R$</span>
                <input type="text"/>
              </div>

              <div className="body-row aniversario">
                <span>Seu aniversário</span>
                <input type="date"/>
              </div>
            </div>
            
            <Button buttonStyle='btn--primary'><i class="fab fa-whatsapp"></i> Simular</Button>
          </div>
        </div>
        
        <img src={process.env.PUBLIC_URL + '/images/pattern-01.png'} alt="padrao" className='padrao padrao4'/>
              
    </section>
  )
}

export default Fgts
