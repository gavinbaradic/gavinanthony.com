import React from 'react'

export default function Contact() {
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
          <input id="name" placeholder="Alex Smith" />
        </div>
        <div className="formrow col-1-of-2">
          <label>Email</label>
          <input placeholder="alex.smith@gmail.com" />
        </div>
        <div className="formrow col-1-of-1">
          <label>Message</label>
          <textarea placeholder="Hello..." />
        </div>
        <div className="formrow col-1-of-1">
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}
