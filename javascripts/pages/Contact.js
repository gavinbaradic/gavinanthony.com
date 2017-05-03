import React from 'react'

import { formSubmission } from '../utils/queries'
import graphql from '../utils/graphql'

export default class Contact extends React.Component {
  state = {
    submitted: false,
    isSubmitting: false,
    name: '',
    email: '',
    message: '',
  }

  handleInputChange = ({ target }) => {
    const { value, id } = target

    this.setState({ [id]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    const { name, email, message } = this.state
    const variables = { name, email, message }

    graphql({ query: formSubmission, variables })
      .then(res => this.setState({ isSubmitting: false, submitted: true }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="contact container small">
        <div className="col-1-of-1">
          <h1>Let's Talk</h1>
          <h2>
            Reach out for a project or just to say hello! My personal email is <a href="mailto:iam@gavinanthony.com">iam@gavinanthony.com</a>
          </h2>
        </div>
        <form className="contact-form grid-row">
          <div className="formrow col-1-of-2">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              placeholder="Alex Smith"
              onChange={this.handleInputChange} />
          </div>
          <div className="formrow col-1-of-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="alex.smith@gmail.com"
              onChange={this.handleInputChange} />
          </div>
          <div className="formrow col-1-of-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hello..."
              onChange={this.handleInputChange} />
          </div>
          <div className="formrow col-1-of-1">
            <button onClick={this.handleSubmit}>
              {this.state.submitted ? 'Thank you!' : 'Send Message' }
            </button>
          </div>
        </form>
      </section>
    )
  }
}
