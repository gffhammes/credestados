import './Home.scss';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import QuemSomos from '../../components/QuemSomos/QuemSomos';
import Diferenciais from '../../components/Diferenciais/Diferenciais';
import Parceiros from '../../components/Parceiros/Parceiros';

function Home() { 
  return (
    <main className='page__home'>
      <HomeHeader/>
      <QuemSomos/>
      <Diferenciais/>
      <img
        src={process.env.PUBLIC_URL + '/images/pattern-01.png'}
        className='padrao padrao-01'
        alt="CredEstados"
      />
      <Parceiros/>
    </main>
  );
}

export default Home;
