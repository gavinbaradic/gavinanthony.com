import React from 'react'

import Header from '../components/Header'
import Clients from '../components/Clients'
import graphql from '../utils/graphql'
import { getClients } from '../utils/queries'

export default class Index extends React.Component {
  state = {
    clients: [],
  }

  componentWillMount() {
    graphql({ query: getClients })
      .then(({ allClients }) => this.setState({ clients: allClients }))
  }

  componentDidMount() {
    document.title = 'Gavin Anthony'
  }

  render() {
    return (
      <div>
        <Header />
        <Clients clients={this.state.clients} />
      </div>
    )
  }
}
