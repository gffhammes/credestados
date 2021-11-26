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
      <EmprestimoCategorias />
      <EmprestimoOpcoes />
    </main>
  );
}

export default EmprestimoConsignado;
