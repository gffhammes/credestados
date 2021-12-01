import './EmprestimoConsignado.scss';
import Button from '../../components/Button/Button';
import EmprestimoHeader from '../../components/EmprestimoHeader/EmprestimoHeader';
import EmprestimoSobre from '../../components/EmprestimoSobre/EmprestimoSobre';
import EmprestimoCategorias from '../../components/EmprestimoCategorias/EmprestimoCategorias';
import EmprestimoOpcoes from '../../components/EmprestimoOpcoes/EmprestimoOpcoes';

function EmprestimoConsignado() { 
  return (
    <main className='page__emprestimo'>
      <EmprestimoHeader />
      <EmprestimoSobre />
      <img
        src={process.env.PUBLIC_URL + '/images/pattern-01.png'}
        className='padrao padrao-01'
        alt="CredEstados"
      />
      <EmprestimoCategorias />
      <img
        src={process.env.PUBLIC_URL + '/images/pattern-02.png'}
        className='padrao padrao-02'
        alt="CredEstados"
      />
      <EmprestimoOpcoes />
    </main>
  );
}

export default EmprestimoConsignado;
