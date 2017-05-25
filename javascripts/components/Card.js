import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'

const Card = ({ clients }) => (
  <section className="clients container fadeInUp">
    {clients.map((client) => {
      const className = {
        className: client.properties !== null
          ? ['card', client.properties.className].join(' ')
          : 'card',
      }
      const size = client.properties !== null ? 'large' : 'small'
      return (
        <Tilt
          key={client.slug}
          style={{ height: 613 }}
          options={{
            max: 5,
            speed: 500,
            scale: 1.02,
            glare: true,
          }}
          {...className}
        >
          <a
            href={`/work/${client.slug}`}
            key={client.name}
            style={{
              backgroundImage: `url(img/${client.slug}/feature-${size}.png)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
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
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Card
