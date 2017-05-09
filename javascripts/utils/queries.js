export const getClients = `
  query {
    allClients(orderBy: order_ASC) {
      name
      slug
      description
      properties
    }
  }
`

export const getClientDetails = `
  query client($slug: String!) {
    Client(slug: $slug) {
      name
      description
      duration
      overview {
        appstore
        playstore
        role
        scope
        stack
        website
      }
    }
  }
`

export const formSubmission = `
  mutation createContactForm($email:String!, $name:String!, $message:String!) {
    createContactForm(
      email: $email,
      name: $name,
      message: $message
    ) {
      id
    }
  }
`
