import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Diferenciais from './components/Diferenciais/Diferenciais';
import Emprestimo from './components/Emprestimo/Emprestimo';
import Fgts from './components/Fgts/Fgts';
import Parceiros from './components/Parceiros/Parceiros';
import Footer from './components/Footer/Footer';

function App() { 
  return (
    <>
      <Navbar/>
      <HeroSection/> 
      <QuemSomos/>
      <Diferenciais/>
      <Emprestimo/>
      <Fgts/>
      <Parceiros/>
      <Footer/>
    </>
  );
}

export default App;
