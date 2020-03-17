import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../redux/cart/cart-actions'

import './collection-item.scss'

const CollectionItem = ({ id, name, imageUrl, price, addItem}) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
  </div>
)

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem())
})

export default connect(null, mapDispatchToProps)(CollectionItem)