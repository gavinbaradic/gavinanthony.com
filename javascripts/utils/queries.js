export const getClients = `
  query {
    allClients(orderBy: createdAt_ASC) {
      name
      properties
    }
  }
`
