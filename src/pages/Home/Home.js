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
      <div className='cards-container container'>
        <CardHero
          title='Empréstimo consignado'
          text='O empréstimo consignado é descontado diretamente no contracheque, holerite do servidor público ou no benefício do INSS. Temos as melhores condições do mercado, faça já sua simulação sem compromisso com um de nossos atendentes.'
          targetSectionId='emprestimo'
          buttonText='Simular agora'          
        />
        <CardHero
          title='FGTS'
          text='Chega de passar sufoco com o seu dinheiro parado, liberamos em poucas horas o seu valor aprisionado na conta do FGTS. Fale agora com um de nossos atendentes.'
          targetSectionId='fgts'
          buttonText='Simular agora'          
        />
      </div>
      <QuemSomos/>
      <img src={process.env.PUBLIC_URL + '/images/pattern-01.png'} alt="padrao" className='padrao padrao1'/>
      <Diferenciais/>
      <img src={process.env.PUBLIC_URL + '/images/pattern-02.png'} alt="padrao" className='padrao padrao2'/>
      <Parceiros/>
    </main>
  );
}

export default Home;
