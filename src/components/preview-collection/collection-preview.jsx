import React from 'react'

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.map((items) => (
        <div key={items.id}>{items.name}</div>
      ))}
    </div>
  </div>
)

export default CollectionPreview