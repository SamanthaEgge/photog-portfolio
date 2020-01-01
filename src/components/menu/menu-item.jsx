import React from 'react';

import './menu-item.scss'

const MenuItem = (props) => (
  <div className='menu-item'>
    <div 
      className='background-image'
      style={{
      backgroundImage: `url(${props.section.imageUrl})`
    }} />
      <div className='menu-content'>
        <h1 className='menu-title'>{props.section.title}</h1>
        <span className='menu-subtitle'>{props.section.subtitle}</span>
      </div>
  </div>

)

export default MenuItem