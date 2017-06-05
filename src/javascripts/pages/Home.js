import React from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import allClients, { moreWork } from '../utils/clients'

export default class Index extends React.Component {
  componentDidMount() {
    document.title = 'Gavin Anthony'
  }

  render() {
    return (
      <div className="fadeInUp">
        <Header />
        <section className="container clients">
          {allClients.map((client) => {
            const className = {
              className: client.properties !== null
                ? ['card', client.properties.className].join(' ')
                : 'card',
            }
            const size = client.properties !== null ? 'large' : 'small'
            return (
              <Card
                client={client}
                className={className}
                size={size}
                key={client.order}
              />
            )
          })}
        </section>
        <div className="container morework">
          <h3 className="col-1-of-1 headline">More Clients</h3>
          <section className="grid-row">
            {moreWork.map(work =>
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="col-3-of-12"
                key={work.img}
              >
                <img
                  src={require(`img/more/${work.img}.png`)}
                  alt={work.href}
                />
              </a>,
            )}
          </section>
        </div>
      </div>
    )
  }
}
