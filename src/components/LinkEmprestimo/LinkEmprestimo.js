import React from 'react';
import './LinkEmprestimo.scss';

export const LinkEmprestimo = ({
  text,
}) => {

  function formatLink() {
    const rawText = `Olá! Gostaria de uma simulação de empréstimo para ${text}!`;    
    const formatedText = encodeURIComponent(rawText);
    return `https://wa.me/554797527024?text=${formatedText}`;
  }

  return (
    <a className='link-emprestimo' target='_blank' href={formatLink()}>
      {text}
    </a>
  )
};

export default LinkEmprestimo
