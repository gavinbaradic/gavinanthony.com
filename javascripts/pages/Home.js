import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import allClients from '../utils/clients'

export default class Index extends React.Component {
  state = {
    clients: allClients,
  }

  componentDidMount() {
    document.title = 'Gavin Anthony'
  }

  render() {
    return (
      <div>
        <Header />
        <Card clients={this.state.clients} />
      </div>
    )
  }
}
