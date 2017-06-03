import React from 'react'

import Card from 'components/SmallCard'

const getPrevClient = ({ allClients, clientId }) => {
  // if first client, return last client
  if (clientId === 0) {
    return allClients[allClients.length - 1]
  }
  return allClients[clientId - 1]
}

const getNextClient = ({ allClients, clientId }) => {
  // if last client, return first client
  if (clientId === allClients.length - 1) {
    return allClients[0]
  }
  return allClients[clientId + 1]
}

const PrevNext = (props) => {
  const prevClient = getPrevClient(props)
  const nextClient = getNextClient(props)

  document.onkeydown = (e) => {
    switch (e.keyCode) {
      case 37:
        window.location = `/work/${prevClient.slug}`
        break
      case 39:
        window.location = `/work/${nextClient.slug}`
        break
    }
  }

  return (
    <div>
      <section className="container prevnext">
        <Card client={prevClient} direction="Previous" />
        <Card client={nextClient} direction="Next" />
      </section>
    </div>
  )
}

export default PrevNext
