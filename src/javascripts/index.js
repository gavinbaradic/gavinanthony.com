import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

import styles from '../stylesheets/app.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Client from './pages/Client'
import PageNotFound from './pages/PageNotFound'

ReactGA.initialize('UA-83701510-1')

const GoogleAnalytics = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  return null
}

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

const Root = () =>
  <Router>
    <div>
      <Nav />
      <Route component={ScrollToTop} />
      <GoogleAnalytics />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work/:slug" component={Client} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>

render(<Root />, document.getElementById('app'))
