import React, {useState} from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import './Condicoes.scss';

export const Condicoes = ({
  text,
}) => {
  return (
    <div className="container--condicao">
      <i class="far fa-check-circle" />
      <p>{text}</p>
    </div>
  )
}

export default Condicoes
