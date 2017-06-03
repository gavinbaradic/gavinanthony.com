import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'

const Card = ({ client, className, size }) => (
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
        backgroundImage: `url(${require(`img/${client.slug}/feature-${size}.png`)})`,
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

Card.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.shape({
    className: PropTypes.string,
  }).isRequired,
  size: PropTypes.string.isRequired,
}

export default Card
