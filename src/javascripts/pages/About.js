import React from 'react'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About'
  }

  render() {
    return (
      <div>
        <section className="container fadeInUp photo">
          <div className="col-8-of-12 portrait" />
          <div className="col-4-of-12 pull-4">
            <h1>About Me</h1>
            <h2>Designer, Developer</h2>
          </div>
        </section>
        <section className="container fadeInUp profile">
          <div className="col-5-of-12">
            <h4>Profile</h4>
          </div>
          <div className="col-7-of-12">
            <p>
              I am a designer and creator of digital products. Currently living in Milwaukee, Wisconsin.
            </p>
            <p>
              My skills include mobile interface design, prototyping, wireframing, branding, product design, front-end development, and back-end development.
            </p>
            <p>
              I have a passion for minimalism in design and believe great design should be invisible. Over the last 6 years, I've worked on a range of web and mobile products.
            </p>
          </div>
        </section>
        <section className="container fadeInUp profile">
          <div className="col-5-of-12">
            <h4>Experience</h4>
          </div>
          <div className="col-7-of-12">
            <ul className="experience">
              <li>
                <h4>
                  <span>Jomo/Likeli</span>
                  <span>2015–2017</span>
                </h4>
                <span>Lead Designer</span>
              </li>
              <li>
                <h4>
                  <span>Taplet Labs</span>
                  <span>2014–2015</span>
                </h4>
                <span>Product Designer</span>
              </li>
              <li>
                <h4>
                  <span>Gener8tor</span>
                  <span>2013–2014</span>
                </h4>
                <span>UX Designer</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
