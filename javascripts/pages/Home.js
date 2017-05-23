import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import allClients, { moreWork } from '../utils/clients'

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
        <div className="container morework fadeInUp">
          <h3 className="col-1-of-1 headline">More Clients</h3>
          <section className="grid-row">
            {moreWork.map(work => (
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="col-3-of-12"
              >
                <img src={`img/more/${work.img}.png`} />
              </a>
            ))}
          </section>
        </div>
      </div>
    )
  }
}
