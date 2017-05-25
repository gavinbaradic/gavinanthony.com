import React from 'react'

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
          Vaporware church-key hell of, synth hoodie banjo sartorial authentic forage meggings aesthetic hot chicken. Drinking vinegar kickstarter try-hard unicorn scenester
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
          Vaporware church-key hell of, synth hoodie banjo sartorial authentic forage meggings aesthetic hot chicken. Drinking vinegar kickstarter try-hard unicorn scenester
        </blockquote>
      </div>
    </section>
    <section className="container full">
      <div>
        <img
          src={require('img/recipelist/branding.svg')}
          alt="Recipelist Branding"
        />
      </div>
    </section>
  </div>
)

export default Recipelist
