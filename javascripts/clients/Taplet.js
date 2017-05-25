import React from 'react'

const Taplet = () => (
  <div>
    <section className="container full">
      <div>
        <img
          src={require('img/taplet/phone-in-hand.jpg')}
          alt="Taplet Feature"
        />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          “The iPhone has offered the ability to take photos at the same time as you record video, but capturing photos from video that has already been captured isn’t quite so straightforward. Taplet aims to solve that.”
          <span>— Techcrunch</span>
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/taplet/iphones.png')} alt="Taplet Phones" />
      </div>
    </section>
  </div>
)

export default Taplet
