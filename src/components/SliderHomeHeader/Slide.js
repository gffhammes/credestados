import './Slide.scss';
import Button from '../Button/Button';
import React from 'react';

const Slide = ({
  imgPath,
  h1,
  buttonText,
  buttonTarget
}) => {
  return (
    <div className='slide'>
      <img src={process.env.PUBLIC_URL + imgPath} alt={h1}/>
      <div className="cover" />
      <div className="content container">
        <h1>{h1}</h1>
        <Button buttonSize='btn--large' pageName={buttonTarget} >{buttonText}</Button>
      </div>
    </div>
  )
}

export default Slide
