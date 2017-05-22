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
            Profile
          </div>
          <div className="col-7-of-12">
            <p>
              Polaroid banh mi biodiesel gastropub, readymade echo park distillery dreamcatcher narwhal everyday carry. Before they sold out tumblr gochujang ramps gentrify, trust fund polaroid hoodie post-ironic selvage. Deep v venmo food truck fashion axe, wolf af pug cray art party vice poutine chambray scenester wayfarers. Twee try-hard brooklyn, lo-fi vexillologist williamsburg blue bottle salvia wayfarers tote bag.
            </p>
            <p>
              Flexitarian aesthetic bicycle rights readymade intelligentsia man bun. Tofu roof party polaroid, +1 subway tile four dollar toast kinfolk coloring book health goth. Bitters la croix deep v lumbersexual polaroid.
            </p>
          </div>
        </section>
        <section className="container fadeInUp profile">
          <div className="col-5-of-12">
            Experience
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
                <span>UX Intern</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
