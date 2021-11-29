import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SaqueFgts from './pages/SaqueFgts/SaqueFgts';
import EmprestimoConsignado from './pages/EmprestimoConsignado/EmprestimoConsignado';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='fgts' element={<SaqueFgts/>} />
        <Route exact path='emprestimo' element={<EmprestimoConsignado/>} />
        <Route exact path='/*' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
