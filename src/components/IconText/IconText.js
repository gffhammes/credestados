import React from 'react';
import './IconText.scss';

export const IconText = ({
  iconPath,
  title,
  text
}) => {  
  return (
    <div className='icon-text'>
      <img src={process.env.PUBLIC_URL + iconPath} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
};

export default IconText