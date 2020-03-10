import React from 'react'

import './user-auth.scss'

import SignIn from '../../components/sign-in/sign-in.jsx'
import SignUp from '../../components/sign-in/sign-up.jsx'

const UserAuth = () => (
  <div className='user-auth'>
    <SignIn />
    <SignUp />
  </div>
)

export default UserAuth