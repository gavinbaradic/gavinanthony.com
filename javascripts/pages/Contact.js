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

  componentDidMount() {
    document.title = 'Contact'
  }

  handleInputChange = ({ target }) => {
    const { value, id } = target

    this.setState({ [id]: value })
  }

  validateForm = (formData) => {
    const validation = {
      nameIsValid: formData.name.length > 0,
      emailIsValid: formData.email.length > 0,
      messageIsValid: formData.message.length > 0,
    }

    return Object.keys(validation).every(v => validation[v] === true)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSubmitting: true })

    const { name, email, message } = this.state
    const variables = { name, email, message }

    if (this.validateForm(variables)) {
      this.setState({ isSubmitting: false, submitted: true })
    } else {
      console.log('error')
    }

    // graphql({ query: formSubmission, variables })
    //   .then(res => this.setState({ isSubmitting: false, submitted: true }))
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="contact container fadeInUp small">
        <div className="col-1-of-1">
          <h1>Let's Talk</h1>
          <h2>
            Reach out for a project or just to say hello! My personal email is
            {' '}
            <a href="mailto:iam@gavinanthony.com">iam@gavinanthony.com</a>
          </h2>
        </div>
        <form className="contact-form grid-row">
          <div className="formrow col-1-of-2">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              placeholder="Alex Smith"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="formrow col-1-of-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="alex.smith@gmail.com"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="formrow col-1-of-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hello..."
              onChange={this.handleInputChange}
            />
          </div>
          <div className="formrow col-1-of-1">
            <button onClick={this.handleSubmit}>
              {this.state.submitted ? 'Thank you!' : 'Send Message'}
            </button>
          </div>
        </form>
      </section>
    )
  }
}
