import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import styles from '../stylesheets/app.css'

import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'

function Root() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work/:clientName" component={Home} />
      </div>
    </Router>
  )
}

render(<Root />, document.getElementById('app'))
