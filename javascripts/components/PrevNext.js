import React from 'react'
import Tilt from 'react-tilt'

const getPrevClient = (array, index) => {
  // if first client, return last client
  if (index === 0) {
    return array[array.length - 1]
  }
  return array[index - 1]
}

const getNextClient = (array, index) => {
  // if last client, return first client
  if (index === array.length - 1) {
    return array[0]
  }
  return array[index + 1]
}

const Card = ({ client, direction }) => (
  <Tilt
    key={client.slug}
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
    <a
      href={`/work/${client.slug}`}
      key={client.name}
      style={{
        backgroundImage: `url(../../img/${client.slug}/feature-small.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <h4>{direction} Project</h4>
        <h3>{client.name}</h3>
      </div>
    </a>
  </Tilt>
)

const PrevNext = ({ allClients, clientId }) => {
  const prev = getPrevClient(allClients, clientId)
  const next = getNextClient(allClients, clientId)

  console.log(next)
  return (
    <div>
      <section className="container prevnext">
        <Card client={prev} direction="Previous" />
        <Card client={next} direction="Next" />
      </section>
    </div>
  )
}

export default PrevNext
