import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import styles from '../stylesheets/app.css'

import RouteTransitionGroup from './components/RouteTransitionGroup'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function Root() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work/:clientName" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

render(<Root />, document.getElementById('app'))
