import React from 'react'
import PropTypes from 'prop-types'

import Detail from 'components/Detail'
import Loading from 'components/Loading'
import graphql from 'utils/graphql'
import { getClientDetails } from 'utils/queries'

import Default from 'clients'
import Recipelist from 'clients/Recipelist'
import Jomo from 'clients/Jomo'
import Taplet from 'clients/Taplet'
import Blip from 'clients/Blip'
import Poparazzi from 'clients/Poparazzi'

const AllClients = [
  { slug: 'default', ActiveComponent: React.createFactory(Default) },
  { slug: 'recipelist', ActiveComponent: React.createFactory(Recipelist) },
  { slug: 'jomo', ActiveComponent: React.createFactory(Jomo) },
  { slug: 'taplet', ActiveComponent: React.createFactory(Taplet) },
  { slug: 'blip', ActiveComponent: React.createFactory(Blip) },
  { slug: 'poparazzi', ActiveComponent: React.createFactory(Poparazzi) },
]

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
    component: AllClients[0],
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
    const variables = { slug }
    const component = AllClients.find(c => c.slug === slug)

    graphql({ query: getClientDetails, variables }).then(({ Client }) => {
      this.setState({
        isFetching: false,
        component,
        name: Client.name,
        description: Client.description,
        duration: Client.duration,
        scope: Client.overview.scope,
        stack: Client.overview.stack,
        website: Client.overview.website,
        appstore: Client.overview.appstore,
        playstore: Client.overview.playstore,
      })
      document.title = `${this.state.name} | Gavin Anthony`
    })
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
        <section className="client-cover container">
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
          {this.state.component.ActiveComponent()}
        </div>
      </div>
    )
  }
}
