import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'

const Card = ({ clients }) => (
  <section className="clients container fadeInUp">
    {clients.map((client) => {
      const className = client.properties !== null
        ? client.properties.class
        : ''
      const size = client.properties !== null ? 'large' : 'small'
      return (
        <Tilt
          className={`card ${className}`}
          options={{
            max: 5,
            speed: 500,
            scale: 1.01,
            glare: true,
          }}
          style={{ height: 613, width: '50%' }}
        >
          <a
            href={`/work/${client.slug}`}
            key={client.name}
            style={{
              backgroundImage: `url(../img/${client.slug}/feature-${size}.png)`,
            }}
          >
            <div>
              <h3>{client.name}</h3>
              <h4>{client.description}</h4>
            </div>
          </a>
        </Tilt>
      )
    })}
  </section>
)

Card.propTypes = {
  clients: PropTypes.shape([
    {
      name: PropTypes.string.isRequired,
    },
  ]).isRequired,
}

export default Card
