import React from 'react'
import { render } from 'react-dom'

import Nav from './components/Nav'
import Header from './components/Header'


import styles from '../stylesheets/app.css'

const App = () => (
  <div>
    <Nav />
    <Header />
  </div>
)

render(<App />, document.getElementById('app'))
