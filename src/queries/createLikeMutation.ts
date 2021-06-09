import { gql } from '@apollo/client'

export default gql`
  mutation {
    createLike(input: { likeableType: "post", likeableId: 1 }) {
      like {
        createdAt
      }
    }
  }
`
