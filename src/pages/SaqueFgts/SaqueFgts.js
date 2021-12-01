import './SaqueFgts.scss';
import FgtsHeader from '../../components/FgtsHeader/FgtsHeader';
import FgtsSimulador from '../../components/FgtsSimulador/FgtsSimulador';
import FgtsCondicoes from '../../components/FgtsCondicoes/FgtsCondicoes';
import FgtsVantagens from '../../components/FgtsVantagens/FgtsVantagens';


function SaqueFgts() { 
  return (
    <main id='page__fgts'>
      <FgtsHeader />
      <FgtsSimulador />
      <img
        src={process.env.PUBLIC_URL + '/images/pattern-01.png'}
        className='padrao padrao-01'
        alt="CredEstados"
      />
      <FgtsCondicoes />
      <img
        src={process.env.PUBLIC_URL + '/images/pattern-02.png'}
        className='padrao padrao-02'
        alt="CredEstados"
      />
      <FgtsVantagens />
    </main>
  );
}

export default SaqueFgts;
