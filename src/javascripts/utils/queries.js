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
