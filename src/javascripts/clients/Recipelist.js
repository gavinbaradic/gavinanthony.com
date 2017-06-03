import React from 'react'

import Logo from 'img/recipelist/branding.svg'

const Recipelist = () => (
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
          Recipelist was initially built soley on Rails, but soon after, the entire front end was written in React. Later on, the method for querying data was transitioned to GraphQL to improve performance.
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
          The mobile app is built on React Native, allowing a cross platform experience with a single code base. The app also uses the same networking code base as the web site—since both are JavaScript.
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
          Bright, bold imagery was used for a Pinterest ad campaign. Pinterest was a great resource for advertising, as the target audience are all Pinterest users.
        </blockquote>
      </div>
    </section>
    <section className="container full">
      <div>
        <img src={Logo} alt="Recipelist Branding" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          The end result was a web/mobile app that ended up solving a personal problem of mine as well as serve as a rewarding experience to me.
        </blockquote>
      </div>
    </section>
  </div>
)

export default Recipelist
