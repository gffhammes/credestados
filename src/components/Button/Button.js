import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline', 'btn--green'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} shadow-1`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
};

export default Button