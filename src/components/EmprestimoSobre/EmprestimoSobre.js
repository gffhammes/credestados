import { React, useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './EmprestimoSobre.scss';


function EmprestimoSobre() {
  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return width;
  }

  return (
    <section className='padding--default bg--light-grey' id='emprestimo-sobre'>
      <div className="container">
        <SectionTitle title='O que é o Emprestimo Consignado?' subTitle='SOBRE' alignment='align--left'/>       
        <p className='text-content'>
          O empréstimo consignado é uma modalidade de crédito destinada a aposentados, pensionistas e servidores públicos. <br/><br/>No consignado, o valor das parcelas de seu empréstimo é descontado automaticamente de sua folha de pagamento ou benefício do INSS.
        </p>
        <Button onClick={() => window.open("https://wa.me/554797527024", "_blank")}> <i className="fab fa-whatsapp" /> Simular</Button>
      </div>
      <img className='img-content' src={process.env.PUBLIC_URL + ((useCurrentWidth() >= 960) ? '/images/emprestimo-sobre-large.png' : '/images/emprestimo-sobre.png')} alt="Empréstimo consignado" />
    </section>
  )
}

export default EmprestimoSobre