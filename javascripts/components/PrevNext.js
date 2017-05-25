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

const PrevNext = props => (
  <div>
    <section className="container prevnext">
      <Card client={getPrevClient(props)} direction="Previous" />
      <Card client={getNextClient(props)} direction="Next" />
    </section>
  </div>
)

export default PrevNext
