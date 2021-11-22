import React from 'react';
import './CardHero.scss';
import Button from '../Button/Button';

export const CardHero = ({
  title,
  text,
  buttonText,
  targetSectionId,
}) => {
  return (
    <div className="card-hero shadow-2">
      <h3>{title}</h3>
      <p>{text}</p>
      <Button onClick={() => window.open("https://wa.me/554797527024", "_blank")}  buttonSize='btn--medium'><i class="fab fa-whatsapp"></i> {buttonText}</Button>
    </div>
  )
};

export default CardHero
