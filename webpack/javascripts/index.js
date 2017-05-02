import React from 'react'
import { render } from 'react-dom'

import Nav from './components/Nav'
import Header from './components/Header'
import Clients from './components/Clients'
import graphql from './utils/graphql'
import { getClients } from './utils/queries'

import styles from '../stylesheets/app.css'

class App extends React.Component {
  state = {
    clients: [],
  }

  componentWillMount() {
    graphql({ query: getClients })
      .then(({ allClients }) => this.setState({ clients: allClients }))
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Clients clients={this.state.clients} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
