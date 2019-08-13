import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({title}) => {
  return (
    <div className='menu-item'>
      <div className='content'>{title}</div>
      <div className='subtitle'>Show now</div>
    </div>
  )
};

export default MenuItem;