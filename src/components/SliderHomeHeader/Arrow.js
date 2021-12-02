import React from 'react'

const Arrow = ({
  direction,
  handleClick
}) => {
  return (
    <div
      className='arrow'
      style={{
        left: (direction === 'left' ? '.25rem' : 'auto'),
        right: (direction === 'right' ? '.25rem' : 'auto')
      }}
      onClick={handleClick}
    >
      <img src={direction === 'right' ? process.env.PUBLIC_URL + '/images/arrow-right.svg' : process.env.PUBLIC_URL + '/images/arrow-left.svg'} />
    </div>
  )
}

export default Arrow
