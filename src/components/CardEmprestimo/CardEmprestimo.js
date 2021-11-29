import React from 'react';
import './CardEmprestimo.scss';


export const CardEmprestimo = ({
  imgPath,
  text,
}) => {  
  const urlWhatsApp = `https://wa.me/554791515234?text=${encodeURI(`Olá, gostaria de uma simulação de empréstimo para ${text.toLowerCase()}!`)}`;

  return (
    <a target='_blank' href={urlWhatsApp}>
      <div className="card-emprestimo shadow-2">
        <div className="cover" />
        <div className="hover"/>
        <img src={process.env.PUBLIC_URL + imgPath} alt={text}/>
        <h3>{text}</h3>
      </div>
    </a>
  )
};

export default CardEmprestimo
