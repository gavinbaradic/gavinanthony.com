import React from 'react'
import PropTypes from 'prop-types'

import Detail from 'components/Detail'
import Loading from 'components/Loading'
import allClients from 'utils/clients'

import DefaultComponent from 'clients'

export default class Client extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  state = {
    isFetching: true,
    slug: this.props.match.params.slug,
    component: DefaultComponent,
    name: '',
    description: '',
    duration: '',
    scope: '',
    stack: '',
    website: '',
    appstore: '',
    playstore: '',
  }

  componentWillMount() {
    const { slug } = this.props.match.params
    const client = allClients.find(c => c.slug === slug)

    this.setState({
      isFetching: false,
      component: client.loadComponent,
      name: client.name,
      description: client.description,
      duration: client.duration,
      scope: client.scope,
      stack: client.stack,
      website: client.website,
      appstore: client.appstore,
      playstore: client.playstore,
    })
    document.title = `${this.state.name} | Gavin Anthony`
  }

  componentDidMount() {
    document.title = 'Gavin Anthony'
  }

  render() {
    const {
      isFetching,
      duration,
      scope,
      stack,
      website,
      playstore,
      appstore,
    } = this.state

    return (
      <div>
        {isFetching && <Loading />}
        <section className="client-cover container fadeInUp">
          <img src={require(`img/${this.state.slug}/logo-white.svg`)} />
        </section>
        <div className={isFetching ? 'hidden' : 'client-overview fadeInUp'}>
          <section className="container">
            <div className="col-7-of-12 overview">
              <h3>Overview</h3>
              <p>{this.state.description}</p>
            </div>
            <div className="col-1-of-12" />
            <div className="col-4-of-12 details">
              <h3>Details</h3>
              <ul>
                {duration && <Detail title="Duration" value={duration} text />}
                {scope && <Detail title="Scope" value={scope} text />}
                {stack && <Detail title="Stack" value={stack} text />}
                {website && <Detail title="Website" value={website} link />}
                {appstore && <Detail title="App Store" value={appstore} btn />}
                {playstore &&
                  <Detail title="Play Store" value={playstore} btn />}
              </ul>
            </div>
          </section>
        </div>
        <div className={isFetching ? 'hidden' : 'fadeInUp'}>
          {this.state.component()}
        </div>
      </div>
    )
  }
}
