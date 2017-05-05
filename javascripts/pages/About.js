import React from 'react'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About'
  }

  render() {
    return (
      <div>
        <section className="container photo">
          <div className="col-8-of-12 portrait" />
          <div className="col-4-of-12 pull-4">
            <h1>About Me</h1>
            <h2>Designer, Developer</h2>
          </div>
        </section>
        <section className="container profile">
          <div className="col-5-of-12">
            Profile
          </div>
          <div className="col-7-of-12">
            Lorem
          </div>
        </section>
        <section className="container profile">
          <div className="col-5-of-12">
            Experience
          </div>
          <div className="col-7-of-12">
            Lorem
          </div>
        </section>
      </div>
    )
  }
}
