import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'

const Card = ({ clients, loadedClass }) => (
  <section className={`clients container ${loadedClass}`}>
    {clients.map((client) => {
      const className = client.properties !== null
        ? client.properties.class
        : ''
      const size = client.properties !== null ? 'large' : 'small'
      return (
        <Tilt
          key={client.slug}
          className={`card ${className}`}
          style={{ height: 613 }}
          options={{
            max: 5,
            speed: 500,
            scale: 1.01,
            glare: true,
          }}
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
  loadedClass: PropTypes.string,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Card.defaultProps = {
  loadedClass: '',
}

export default Card
