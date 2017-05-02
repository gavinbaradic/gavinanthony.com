import React from 'react'

export default function Clients({ clients }) {
  return (
    <section className="clients container">
      {clients.map((client, i) => {
        const className = client.properties !== null ? client.properties.class : ''
        return (
          <div className={className} key={i}>{client.name}</div>
        )
      })}
    </section>
  )
}
