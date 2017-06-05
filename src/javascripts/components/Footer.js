import React from 'react'
import { Link } from 'react-router-dom'

const networks = {
  Dribbble: 'https://dribbble.com/gavinanthony',
  GitHub: 'https://github.com/gavinanthony',
  LinkedIn: 'https://linkedin.com/in/gavinanthony',
  Twitter: 'https://twitter.com/gavicoind',
}

const Footer = () =>
  <footer>
    <section className="container">
      <aside>
        <Link to="/">© {new Date().getFullYear()} Gavin Anthony, Inc.</Link>
      </aside>
      <aside className="link-border">
        {Object.keys(networks).map((network, i) =>
          <Link to={networks[network]} target="_blank" key={i}>{network}</Link>
        )}
      </aside>
    </section>
  </footer>

export default Footer
