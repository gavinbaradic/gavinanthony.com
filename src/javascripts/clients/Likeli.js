import React from 'react'

const Likeli = () =>
  <div>
    <section className="container full">
      <div>
        <img src={require('img/likeli/iphones.png')} alt="Likeli Heatmap" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          It's about knowing how packed a place is, the type of crowd you will
          find, and the chances you will have the time of your life meeting new
          people you will actually want to see again. Likeli's Radar gives you
          that knowledge 24/7.
        </blockquote>
      </div>
    </section>
    <section className="container full">
      <div>
        <img src={require('img/likeli/heatmap.jpg')} alt="Likeli Heatmap" />
      </div>
    </section>
    <section className="container full">
      <div>
        <img src={require('img/likeli/branding.png')} alt="Likeli Branding" />
      </div>
    </section>
  </div>

export default Likeli
