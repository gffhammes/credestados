import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline', 'btn--green'];

const SIZES = ['btn--medium', 'btn--large'];

export const ButtonRouter = ({
  children,
  type,
  onClick,
  pageName,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkPageName = pageName ? pageName : ""

  return (
    <Link
      to={checkPageName}
      className='btn-mobile'
      activeClass="active"      
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

export const ButtonScroll = ({
  children,
  type,
  onClick,
  sectionName,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkSectionName = sectionName ? sectionName : ""

  return (
    <LinkScroll
      to={checkSectionName}
      smooth={true}
      offset={-75}
      className='btn-mobile'
      activeClass="active"      
    >    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} shadow-1`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </LinkScroll>
  )
};

export default ButtonRouter;