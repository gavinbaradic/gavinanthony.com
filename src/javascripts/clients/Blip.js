import React from 'react'

const Blip = () =>
  <div>
    <section className="container full">
      <div>
        <img src={require('img/blip/phone-in-hand.jpg')} alt="Blip Feature" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          Blip is a location-based social network that allows you to connect
          with people nearby in an exciting way. Simply do a blip search to
          browse all the people in your vicinity, never miss a meaningful
          connection again.
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/blip/iphones.png')} alt="Blip Phones" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          Discover fun things to do and great ways to meet new friends on your
          campus right now. Send a private blip and invite your friends to do
          something, meet up with people in a crowded area, or show a friend
          that you’re on the way.
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/blip/iphones2.png')} alt="Blip Phones" />
      </div>
    </section>
  </div>

export default Blip
