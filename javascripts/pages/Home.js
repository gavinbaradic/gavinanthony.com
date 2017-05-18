import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import graphql from '../utils/graphql'
import { getClients } from '../utils/queries'

export default class Index extends React.Component {
  state = {
    clients: [],
    loaded: false,
  }

  componentWillMount() {
    graphql({ query: getClients }).then(({ allClients }) =>
      this.setState({ clients: allClients, loaded: true })
    )
  }

  componentDidMount() {
    document.title = 'Gavin Anthony'
  }

  render() {
    return (
      <div>
        <Header />
        <Card
          clients={this.state.clients}
          loadedClass={this.state.loaded && 'fadeInUp'}
        />
      </div>
    )
  }
}
