import './App.scss';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Diferenciais from './components/Diferenciais/Diferenciais';

function App() { 
  return (
    <>
      <Navbar/>
      <HeroSection/> 
      <QuemSomos/>
      <Diferenciais/>
    </>
  );
}

export default App;
