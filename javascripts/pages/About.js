import React from 'react'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About'
  }

  render() {
    return (
      <div>
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
