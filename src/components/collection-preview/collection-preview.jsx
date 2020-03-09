import React from 'react'

import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item.jsx'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((items, idx) => idx <4)
        .map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
)

export default CollectionPreview