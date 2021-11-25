import React from 'react';
import './LinkEmprestimo.scss';

export const LinkEmprestimo = ({
  text,
}) => {
  return (
    <a className='link-emprestimo' target='_blank' href={`https://wa.me/554797527024?text=${encodeURIComponent(`Olá! Gostaria de uma simulação de empréstimo para ${text}!`)}`}>
      {text}
    </a>
  )
};

export default LinkEmprestimo
