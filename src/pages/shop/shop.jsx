import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/collections-overview/collections-overview'

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default ShopPage