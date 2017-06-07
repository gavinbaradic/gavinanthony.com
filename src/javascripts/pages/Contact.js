import React from 'react'

import { formSubmission } from '../utils/queries'
import graphql from '../utils/graphql'

export default class Contact extends React.Component {
  state = {
    submitted: false,
    isSubmitting: false,
    buttonState: 'Send Message',
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

  validateForm = formData => ({
    name: formData.name.length > 0,
    email: /.+@.+/.test(formData.email),
    message: formData.message.length > 0,
  })

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSubmitting: true, buttonState: 'Sending...' })

    const { name, email, message } = this.state
    const variables = { name, email, message }
    const validateForm = this.validateForm(variables)
    const valid = Object.keys(validateForm).every(v => validateForm[v] === true)

    if (valid) {
      graphql({ query: formSubmission, variables })
        .then(() =>
          this.setState({
            isSubmitting: false,
            submitted: true,
            buttonState: 'Thanks! We will be in touch soon',
          }),
        )
        .catch(() =>
          this.setState({
            isSubmitting: false,
            submitted: false,
            buttonState: 'Send Message',
          }),
        )
    } else {
      this.setState({
        buttonState: 'Send Message',
        errors: {
          name: !validateForm.name && '* Do not leave blank',
          email: !validateForm.email && '* Email is not valid',
          message: !validateForm.message && '* Do not leave blank',
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
                {this.state.buttonState}
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
