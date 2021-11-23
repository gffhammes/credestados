import React, {useState} from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import NumberFormat from 'react-number-format';
import Button from '../Button/Button';
import './Fgts.scss';

function Fgts() {
  const [saldoFgts, setSaldoFgts] = useState('');
  const [aniversario, setAniversario] = useState('');

  const handleFormClick = () => {
    const applicationForm = document.getElementById("fgts-form");    
    const text = encodeURIComponent(`Olá, gostaria de uma simulação para antecipação do FGTS!
      
Meu saldo é de ${saldoFgts} e meu aniversário é no dia ${aniversario}.`);

    if (applicationForm.checkValidity()) {
      window.open(`https://wa.me/554797527024?text=${text}`, "_blank");
    } else {
      applicationForm.reportValidity();
    }
  };

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
            
          <form id='fgts-form' className="card-simulacao-fgts shadow-2">
            <div className="card-header">            
              <i class="fas fa-piggy-bank"></i>
              <h3>Saque FGTS</h3>
            </div>
            <div className="card-body">
              <div className="body-row valor">
                <span>Saldo FGTS</span>
                <NumberFormat
                  required
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                  decimalScale={'2'}
                  prefix={'R$ '}
                  id="saldo-fgts"
                  type="text"
                  placeholder='R$ 0'
                  onChange={event => setSaldoFgts(event.target.value)}
                />
              </div>

              <div className="body-row aniversario">
                <span>Seu aniversário</span>
                <input required onChange={event => setAniversario(event.target.value)} type="date"/>
              </div>
            </div>
            
            <Button onClick={handleFormClick} buttonStyle='btn--primary'>Simular</Button>
          </form>
        </div>
        
        <img src={process.env.PUBLIC_URL + '/images/pattern-01.png'} alt="padrao" className='padrao padrao4'/>
              
    </section>
  )
}

export default Fgts
