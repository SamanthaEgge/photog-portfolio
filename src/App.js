import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/home/home.jsx'
import ShopPage from './pages/shop/shop.jsx'
import Header from './components/header/header.jsx'
import UserAuth from './pages/user-auth/user-auth.jsx'
import { auth } from './firebase/utils.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user)
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

export default App;
