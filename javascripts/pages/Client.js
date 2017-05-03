import React from 'react'

import graphql from '../utils/graphql'
import { getClientDetails } from '../utils/queries'

export default class Client extends React.Component {
  state = {
    isFetching: true,
    slug: this.props.match.params.slug,
    name: '',
    duration: '',
    scope: '',
    stack: '',
    website: '',
    appstore: '',
    playstore: '',
  }

  componentWillMount() {
    const variables = { slug: this.props.match.params.slug }

    graphql({ query: getClientDetails, variables })
      .then(({ Client }) => {
        this.setState({
          name: Client.name,
          duration: Client.duration,
          scope: Client.overview.scope,
          stack: Client.overview.stack,
          website: Client.overview.website,
          appstore: Client.overview.appstore,
          playstore: Client.overview.playstore,
        })
        document.title = this.state.name
      })
  }

  componentDidMount() {
    document.title = this.state.name
  }

  render() {
    return (
      <div>
        <section className="container">
          {this.state.name}
        </section>
        <section className="client-overview container">
          <div className="overview">
            <h3>Overview</h3>
          </div>
          <div className="details">
            <h3>Details</h3>
          </div>
        </section>
      </div>
    )
  }
}
