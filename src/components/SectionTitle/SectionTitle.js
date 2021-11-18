import React from 'react';
import './SectionTitle.scss';

const ALIGNMENTS = ['align--left', 'align--center', 'align--right'];

export const SectionTitle = ({
  title,
  subTitle,
  alignment
}) => {
  const checkAlignment = ALIGNMENTS.includes(alignment) ? alignment : ALIGNMENTS[0];

  return (
    <div className={`title-container ${checkAlignment}`}>
      <span>{subTitle}</span>
      <h2>{title}</h2>
    </div>
  )
};

export default SectionTitle