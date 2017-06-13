import React from 'react'
import SVG from 'react-svg-inline'

import Logo from 'img/recipelist/branding.svg'

const Recipelist = () =>
  <div>
    <section className="container full">
      <div>
        <img
          src={require('img/recipelist/macbook.jpg')}
          alt="Recipelist For Web"
        />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          Recipelist was initially built entirely on Rails but was later written
          in React.js, using the Rails rest API. Later on, the method for
          querying data was transitioned to GraphQL to improve performance.
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img
          src={require('img/recipelist/iphones.png')}
          alt="Recipelist Phones"
        />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          The mobile app is built on React Native. Because the front end was
          written in React, many areas of the code base could shared, including
          all of the networking and state management.
        </blockquote>
      </div>
    </section>
    <section className="container full">
      <div>
        <img
          src={require('img/recipelist/ads.png')}
          alt="Recipelist Branding"
        />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          With Pinterest users being the target audience for the project, a
          Pinterest ad campaign with bold, bright imagery captured the attention
          of many potential users.
        </blockquote>
      </div>
    </section>
    <section className="container full">
      <div className="col-1-of-1">
        <SVG svg={Logo} width="100%" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          The end result was a web/mobile app that solved a personal problem of
          mine. It also ended up being a great opportunity to learn new
          javascript frameworks, creating back-end APIs, and introducing myself
          to mobile app development.
        </blockquote>
      </div>
    </section>
  </div>

export default Recipelist
