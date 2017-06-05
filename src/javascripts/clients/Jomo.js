import React from 'react'

const Jomo = () =>
  <div>
    <section className="container full">
      <div>
        <img src={require('img/jomo/phone-in-hand.jpg')} alt="JOMO Feature" />
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/jomo/icons.png')} alt="JOMO Feature" />
      </div>
    </section>
    <section className="container full">
      <h4 className="col-1-of-1">Illustrations</h4>
      <div>
        <img src={require('img/jomo/illustrations.png')} alt="JOMO Feature" />
      </div>
    </section>
    <section className="container full">
      <div>
        <img src={require('img/jomo/branding.png')} alt="JOMO Feature" />
      </div>
    </section>
  </div>

export default Jomo
