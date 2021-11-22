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
      <Button sectionId={targetSectionId} buttonSize='btn--medium'>{buttonText}</Button>
    </div>
  )
};

export default CardHero
