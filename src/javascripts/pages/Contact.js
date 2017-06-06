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
    errors: {
      name: '',
      email: '',
      message: '',
    },
  }

  componentDidMount() {
    document.title = 'Contact'
  }

  handleInputChange = ({ target }) => {
    const { value, id } = target

    this.setState({
      [id]: value,
      errors: Object.assign(this.state.errors, {
        [id]: '',
      }),
    })
  }

  validateForm = (formData) => {
    const validation = {
      nameIsValid: formData.name.length > 0,
      emailIsValid: /.+@.+/.test(formData.email),
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
      graphql({ query: formSubmission, variables })
        .then(() => this.setState({ isSubmitting: false, submitted: true }))
        .catch(err => console.log(err))
    } else {
      this.setState({
        errors: {
          name: '* Do not leave blank',
          email: '* Email is not valid',
          message: '* Do not leave blank',
        },
      })
    }
  }

  render() {
    const isAnError = Object.keys(this.state.errors).some(
      e => this.state.errors[e].length > 0,
    )
    return (
      <section className="contact container fadeInUp small">
        <div className="col-1-of-1 link-border">
          <h1>Let's Talk</h1>
          <h2>
            Reach out for a project or just to say hello! My personal email is
            {' '}
            <a href="mailto:iam@gavinanthony.com">iam@gavinanthony.com</a>
          </h2>
        </div>
        <form className="contact-form grid-row">
          <fieldset className="col-1-of-2" disabled={this.state.submitted}>
            <label htmlFor="name">
              Full Name <span>{this.state.errors.name}</span>
            </label>
            <input
              id="name"
              placeholder="Alex Smith"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="col-1-of-2" disabled={this.state.submitted}>
            <label htmlFor="email">
              Email <span>{this.state.errors.email}</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="alex.smith@gmail.com"
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="col-1-of-1" disabled={this.state.submitted}>
            <label htmlFor="message">
              Message <span>{this.state.errors.message}</span>
            </label>
            <textarea
              id="message"
              placeholder="Hello..."
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="col-1-of-1" disabled={this.state.submitted}>
            <div className="grid-row">
              <button
                className={this.state.submitted && 'submitted success'}
                onClick={this.handleSubmit}
              >
                {this.state.submitted
                  ? "Thanks! We'll be in touch soon!"
                  : 'Send Message'}
              </button>
              {isAnError &&
                <div className="errors">
                  Oops, there were some errors!
                </div>}
            </div>
          </fieldset>
        </form>
      </section>
    )
  }
}
