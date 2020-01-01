import React from 'react';

import './menu-item.scss'

const MenuItem = ({ title, subtitle }) => (
  <div className='menu-item'>
    <div className='menu-content'>
      <h1 className='menu-title'>{title}</h1>
      <span className='menu-subtitle'>{subtitle}</span>
    </div>
  </div>

)

export default MenuItem