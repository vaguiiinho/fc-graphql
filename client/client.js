
const fetch = require('node-fetch')

const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
  const response = await fetch(graphqlEndpoint, {
    method: 'GET',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ query, variables })
  });

  return response
}

const GRAPHQL_ENDPOINT = 'http://go:8080'

const findCategories = `
  categories {
    id
    name
    description
    courses {
      id
      name
      description
    }
  }
}
`
consumirAPI(GRAPHQL_ENDPOINT, findCategories)
  .then(res => console.log(res.data))
  .catch(error => console.log(error))
