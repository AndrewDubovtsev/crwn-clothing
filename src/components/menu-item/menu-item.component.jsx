import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }} className='background-image'/>
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='subtitle'>Show now</div>
      </div>
    </div>
  )
};

export default MenuItem;