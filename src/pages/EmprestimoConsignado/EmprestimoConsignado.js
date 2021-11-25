import './EmprestimoConsignado.scss';
import Button from '../../components/Button/Button';
import EmprestimoHeader from '../../components/EmprestimoHeader/EmprestimoHeader';
import EmprestimoSobre from '../../components/EmprestimoSobre/EmprestimoSobre';
import EmprestimoCategorias from '../../components/EmprestimoCategorias/EmprestimoCategorias';
import EmprestimoOpcoes from '../../components/EmprestimoOpcoes/EmprestimoOpcoes';

function EmprestimoConsignado() { 
  return (
    <main className='page__emprestimo'>
      <img src={process.env.PUBLIC_URL + '/images/pattern-01.png'} alt="padrao" className='padrao padrao1'/>
      <EmprestimoHeader />
      <EmprestimoSobre />
      <img src={process.env.PUBLIC_URL + '/images/pattern-02.png'} alt="padrao" className='padrao padrao3'/>     
      <EmprestimoCategorias />
      <EmprestimoOpcoes />
    </main>
  );
}

export default EmprestimoConsignado;
