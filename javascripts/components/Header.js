import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="container header">
      <h1>Product designer & developer from Milwaukee, WI.</h1>
      <h2>
        I work with startups and businesses to create great experiences on web & mobile applications.
        {' '}
        <Link to="/contact" className="btn dark">Get in touch</Link>
      </h2>
    </header>
  )
}
