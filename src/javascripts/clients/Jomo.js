import React from 'react'
import SVG from 'react-svg-inline'

import Illustrations from 'img/jomo/illustrations.svg'

const Jomo = () =>
  <div>
    <section className="container full">
      <div>
        <img src={require('img/jomo/phone-in-hand.jpg')} alt="JOMO Feature" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          JOMO connects you and the things you love to
          do, with the people that love to do them. From after work drinks, to
          kayaking, and to yard sales—life is an event worth sharing. JOMO
          connects your events, big or small, to like-minded people looking to
          experience the things you love.
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/jomo/iphones.png')} alt="JOMO iPhones" />
      </div>
    </section>
    <section className="container full split-view m-tb-m">
      <aside className="content">
        <h3>JOMO Icon System</h3>
        <h4>
          A hand made icon set was made to keep the iconography around the app
          consistent and unique. Most icons were based on a 24x24 grid with 2pt
          strokes.
        </h4>
      </aside>
      <aside>
        <img src={require('img/jomo/icons.png')} alt="JOMO Feature" />
      </aside>
    </section>
    <section className="container full">
      <div className="col-1-of-1">
        <SVG svg={Illustrations} width="100%" />
      </div>
    </section>
    <section className="container full">
      <div className="col-1-of-1">
        <SVG svg={require('img/jomo/branding.svg')} width="100%" />
      </div>
    </section>
  </div>

export default Jomo
