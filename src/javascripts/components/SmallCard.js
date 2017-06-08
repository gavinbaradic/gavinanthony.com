import React from 'react'
import PropTypes from 'prop-types'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'

const Card = ({ client, direction }) =>
  <Tilt
    options={{
      max: 5,
      speed: 500,
      scale: 1.02,
      glare: true,
    }}
    className={
      client.properties !== null
        ? ['card half-size', client.properties.className].join(' ')
        : 'card half-size'
    }
  >
    <Link
      to={`/work/${client.slug}`}
      key={client.name}
      style={{
        backgroundImage: `url(${require(`img/${client.slug}/feature-small.jpg`)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <h4>{direction} Project</h4>
        <h3>{client.name}</h3>
      </div>
    </Link>
  </Tilt>

Card.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    properties: PropTypes.shape({
      className: PropTypes.string,
    }),
  }).isRequired,
  direction: PropTypes.string.isRequired,
}

export default Card
