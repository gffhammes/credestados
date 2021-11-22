import React from 'react';
import './CardEmprestimo.scss';

export const CardEmprestimo = ({
  imgPath,
  text,
}) => {
  return (
    <a target='_blank' href="https://wa.me/554797527024">
      <div className="card-emprestimo shadow-2">
        <div className="cover" />
        <img src={process.env.PUBLIC_URL + imgPath} alt={text}/>
        <h3>{text}</h3>
      </div>
    </a>
  )
};

export default CardEmprestimo
