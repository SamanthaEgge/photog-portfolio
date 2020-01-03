import React from 'react';
import { withRouter } from 'react-router-dom'

import './menu-item.scss'

const MenuItem = (props) => (
  <div className='menu-item' onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
    <div 
      className='background-image'
      style={{
      backgroundImage: `url(${props.imageUrl})`
    }} />
      <div className='menu-content'>
        <h1 className='menu-title'>{props.title}</h1>
        <span className='menu-subtitle'>{props.subtitle}</span>
      </div>
  </div>

)

export default withRouter(MenuItem)