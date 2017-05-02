import axios from 'axios'

const url = 'https://api.graph.cool/simple/v1/cj27on01qhgd40115n5ak7tjv'

export default function graphql({ query, variables = {} }) {
  return axios({
    url,
    method: 'post',
    data: {
      query,
      variables,
    },
  }).then(({ data }) => data.data)
}
