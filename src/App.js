import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Diferenciais from './components/Diferenciais/Diferenciais';
import Emprestimo from './components/Emprestimo/Emprestimo';
import Fgts from './components/Fgts/Fgts';
import Parceiros from './components/Parceiros/Parceiros';
import Footer from './components/Footer/Footer';
import CardHero from './components/CardHero/CardHero';

function App() { 
  return (
    <>
      <Navbar/>
      <HeroSection/> 
      <div className='cards-container container'>
        <CardHero
          title='Empréstimo'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque. Vivamus condimentum posuere augue, a tristique erat dapibus non. Curabitur sit amet varius sem.'
          targetSectionId='emprestimo'
          buttonText='Simular agora'          
        />
        <CardHero
          title='FGTS'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id consectetur neque. Vivamus condimentum posuere augue.'
          targetSectionId='fgts'
          buttonText='Simular agora'          
        />
      </div>
      <QuemSomos/>
      <img src={process.env.PUBLIC_URL + '/images/pattern-01.png'} alt="padrao" className='padrao padrao1'/>
      <Diferenciais/>
      <img src={process.env.PUBLIC_URL + '/images/pattern-02.png'} alt="padrao" className='padrao padrao2'/>
      <Emprestimo/>
      <Fgts/>
      <Parceiros/>
      <Footer/>
    </>
  );
}

export default App;
