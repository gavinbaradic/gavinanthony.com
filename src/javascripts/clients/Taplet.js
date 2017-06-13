import React from 'react'
import SVG from 'react-svg-inline'

const Taplet = () =>
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
          “The iPhone has offered the ability to take photos at the same time as
          you record video, but capturing photos from video that has already
          been captured isn’t quite so straightforward. Taplet aims to solve
          that.”
          <span>— Techcrunch</span>
        </blockquote>
      </div>
    </section>
    <section className="container">
      <div>
        <img src={require('img/taplet/iphones.png')} alt="Taplet Phones" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          “Simple controls let you view at shooting speed or proceed slowly
          forward or backward. Tapping on the filmstrip also lets you navigate
          through the video to find frames you want to save.”
          <span>— The Next Web</span>
        </blockquote>
        <p>
          The goal was to create a simple user experience for a relatively new
          type of interaction pattern. The user can tap on the screen to pull
          out a photo from a video. The next screen then allows them to save the
          photos or share directly to social media.
        </p>
      </div>
    </section>
    <section className="container full">
      <div>
        <img
          src={require('img/taplet/camera-iphone.png')}
          alt="Taplet Feature"
        />
      </div>
    </section>
    <section className="container m-tb-m">
      <div className="col-1-of-1">
        <SVG svg={require('img/taplet/camera-options.svg')} width="100%" />
      </div>
    </section>
    <section className="container">
      <div className="client-quote">
        <blockquote>
          The end result was a sleek, dark interface that was easy to use and
          received positive reviews on the app store.
        </blockquote>
      </div>
    </section>
  </div>

export default Taplet
