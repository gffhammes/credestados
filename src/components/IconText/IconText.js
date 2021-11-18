import React from 'react';
import './IconText.scss';

export const IconText = ({
  icon,
  title,
  text
}) => {
  const checkAlignment = ALIGNMENTS.includes(alignment) ? alignment : ALIGNMENTS[0];

  return (
    <div className={`title-container ${checkAlignment}`}>
      <span>{subTitle}</span>
      <h2>{title}</h2>
    </div>
  )
};

export default IconText