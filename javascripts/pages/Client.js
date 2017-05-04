import React from 'react'

import Loading from '../components/Loading'
import graphql from '../utils/graphql'
import { getClientDetails } from '../utils/queries'

const Detail = ({ title, value, text, link, btn }) => (
  <li>
    <span>{title}</span>
    {link && <a href={value} target="_blank">{value}</a>}
    {btn && <a href={value} target="_blank" className="btn">{value}</a>}
    {text && <span>{value}</span>}
  </li>
)

export default class Client extends React.Component {
  state = {
    isFetching: true,
    slug: this.props.match.params.slug,
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
    const variables = { slug: this.props.match.params.slug }

    graphql({ query: getClientDetails, variables }).then(({ Client }) => {
      this.setState({
        isFetching: false,
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
          <img src={require(`../../img/${this.state.slug}/logo-white.svg`)} />
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
                {playstore && <Detail title="Play Store" value={playstore} btn />}
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
