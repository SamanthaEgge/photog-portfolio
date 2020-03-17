import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import HomePage from './pages/home/home.jsx'
import ShopPage from './pages/shop/shop.jsx'
import Header from './components/header/header.jsx'
import UserAuth from './pages/user-auth/user-auth.jsx'
import { auth, createUserProfileDocument } from './firebase/utils.js'
import { setCurrentUser } from './redux/user/user-actions.js'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return(
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={UserAuth} />
        {/* <Route exact path='/headshots' component={Headshots} />
        <Route exact path='/wildlife' component={Wildlife} />
        <Route exact path='/landscapes' component={Landscapes} />
        <Route exact path='/prints' component={Prints} /> */}
      </Switch>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
