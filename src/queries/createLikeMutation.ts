import { gql } from '@apollo/client'

export default gql`
  mutation CreateLikeMutation($likeableId: String!, $likeableType: String!) {
    createLike(input: { likeableType: $likeableType, likeableId: $likeableId }) {
      like {
        createdAt
      }
    }
  }
`
