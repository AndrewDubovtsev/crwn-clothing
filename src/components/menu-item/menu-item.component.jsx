import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);