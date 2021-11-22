import React from 'react';
import { Link } from 'react-scroll';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline', 'btn--green'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  sectionId,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkSectionId = sectionId ? sectionId : "/"

  return (
    <Link
      to={checkSectionId}
      className='btn-mobile'
      activeClass="active"
      spy={true}
      smooth={true}
      
    >    
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