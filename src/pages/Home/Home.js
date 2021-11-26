import './Home.scss';
import HeroSection from '../../components/HeroSection/HeroSection';
import CardHero from '../../components/CardHero/CardHero';
import QuemSomos from '../../components/QuemSomos/QuemSomos';
import Diferenciais from '../../components/Diferenciais/Diferenciais';
import Parceiros from '../../components/Parceiros/Parceiros';

function Home() { 
  return (
    <main className='page__home'>
      <HeroSection/>
      <QuemSomos/>
      <Diferenciais/>
      <Parceiros/>
    </main>
  );
}

export default Home;
