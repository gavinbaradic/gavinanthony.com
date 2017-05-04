export const getClients = `
  query {
    allClients(orderBy: createdAt_ASC) {
      name
      slug
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
