import React from 'react'
import SVG from 'react-svg-inline'

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
      <div className="col-1-of-1 m-b-100">
        <img src={require('img/likeli/heatmap.jpg')} alt="Likeli Heatmap" />
      </div>
    </section>
    <section className="container">
      <div className="col-1-of-1">
        <img src={require('img/likeli/macbook.png')} alt="Likeli" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          The website featured a heatmap video that shows transitions of heatmap
          waves in different locations. The headline also transitioned
          categories based on the heatmap video.
        </blockquote>
        <p>
          To keep the headlines and video in sync, Window.RequestAnimationFrame
          was used. This kept the two in sync, even if the window became
          inactive, unlike SetTimeout().
        </p>
      </div>
    </section>
    <section className="container full">
      <div className="col-1-of-1">
        <SVG svg={require('img/likeli/branding.svg')} width="100%" />
      </div>
    </section>
  </div>

export default Likeli
