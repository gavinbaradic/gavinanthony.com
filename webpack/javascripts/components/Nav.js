import React from 'react'

export default function Nav() {
  return (
    <nav>
      <section className="container">
        <aside>
          <a href="/">Gavin Anthony</a>
        </aside>
        <aside>
          <a href="/" className="active">Work</a>
          <a href="/">About</a>
          <a href="/" className="btn">Contact</a>
        </aside>
      </section>
    </nav>
  )
}
