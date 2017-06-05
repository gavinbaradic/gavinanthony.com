import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <section className="container">
        <aside>
          <Link to="/">Gavin Anthony</Link>
        </aside>
        <aside className="link-border">
          <NavLink to="/" exact>Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="btn">Contact</NavLink>
        </aside>
      </section>
    </nav>
  )
}
