import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './Emprestimo.scss';


function Emprestimo() {
  return (
    <section className='padding--default' id='emprestimo'>
      <div className="container">
        <SectionTitle title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' subTitle='EMPRÉSTIMO' alignment='align--left'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tempore provident consequatur exercitationem harum et voluptatem accusantium, unde enim aliquid, odio, dolores animi id. Eum sed officia nisi mollitia doloremque?</p>

        <div className="card-simulacao-emprestimo shadow-2 bg--light-grey">
          <div className="card-header">            
            <i class="fas fa-hand-holding-usd"></i>
            <h3>Simular empréstimo</h3>
          </div>
          <div className="card-body">
            <div className="body-row">
              <span>Qual o valor?</span>
              <input type="text" placeholder="R$ 0,00"/>
            </div>

            <div className="body-row">
              <span>Quantas parcelas?</span>
              <input type="text" placeholder="1"/>
            </div>
          </div>
          
          <Button buttonStyle='btn--primary' >Simular</Button>
        </div>
      </div>
    </section>
  )
}

export default Emprestimo
