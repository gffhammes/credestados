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
      <FgtsCondicoes />
      <FgtsVantagens />
    </main>
  );
}

export default SaqueFgts;
