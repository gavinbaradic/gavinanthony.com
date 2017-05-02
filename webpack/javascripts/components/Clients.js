import React from 'react'

export default function Clients({ clients }) {
  return (
    <section className="clients container">
      {clients.map(client => (
        <div>{client.name}</div>
      ))}
    </section>
  )
}
