import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/utils.js'
import { selectCartHidden } from '../../redux/cart/cart-selector'
import { selectCurrentUser } from '../../redux/user/user-selector'
import CartIcon from '../cart-icon/cart-icon.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx'

import './header.scss'
import { ReactComponent as Logo } from '../../assets/w.svg'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className='option' to='/signin'>
          SIGN IN
          </Link>
        )
      }
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
