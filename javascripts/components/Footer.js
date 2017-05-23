import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <section className="container link-border">
      <aside>
        <Link to="/">© {new Date().getFullYear()} Gavin Anthony, Inc.</Link>
      </aside>
      <aside>
        <Link to="/">Dribbble</Link>
        <Link to="/">GitHub</Link>
        <Link to="/">LinkedIn</Link>
        <Link to="/">Twitter</Link>
      </aside>
    </section>
  </footer>
)

export default Footer
