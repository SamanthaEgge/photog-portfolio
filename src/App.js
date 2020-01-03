import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/home/home.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/headshots' component={Headshots} />
        <Route exact path='/wildlife' component={Wildlife} />
        <Route exact path='/landscapes' component={Landscapes} />
        <Route exact path='/prints' component={Prints} /> */}
      </Switch>
    </div>
  );
}

export default App;
