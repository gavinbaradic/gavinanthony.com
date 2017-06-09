import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-svg-inline'

import Detail from 'components/Detail'
import PrevNext from 'components/PrevNext'
import allClients from 'utils/clients'

export default class Client extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  state = {
    slug: this.props.match.params.slug,
    component: () => null,
    name: '',
    description: '',
    duration: '',
    location: '',
    scope: '',
    stack: '',
    website: '',
    appstore: '',
    playstore: '',
    isLoading: 'fadeInUp',
  }

  componentWillMount() {
    this.updateClient(this.props.match.params.slug)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: 'fadeOutDown' })
    setTimeout(() => this.updateClient(nextProps.match.params.slug), 500)
  }

  updateClient = (slug) => {
    const client = allClients.find(c => c.slug === slug)

    this.setState({
      component: client.loadComponent,
      name: client.name,
      order: client.order,
      logo: client.logo,
      description: client.description,
      duration: client.duration,
      location: client.location,
      scope: client.scope,
      stack: client.stack,
      website: client.website,
      appstore: client.appstore,
      playstore: client.playstore,
      isLoading: 'fadeInUp',
    })

    document.title = `${client.name} | Gavin Anthony`
  }

  render() {
    const {
      logo,
      duration,
      location,
      scope,
      stack,
      website,
      playstore,
      appstore,
      isLoading,
    } = this.state

    return (
      <div className={isLoading}>
        <section className="client-cover container">
          <SVG svg={logo} />
        </section>
        <div className="client-overview">
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
                {location && <Detail title="Location" value={location} text />}
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
        <div>
          {this.state.component()}
        </div>
        <PrevNext allClients={allClients} clientId={this.state.order} />
      </div>
    )
  }
}
