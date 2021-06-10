import { gql } from '@apollo/client'

export default gql`
  mutation UnlikeMutation($likeableId: String!, $likeableType: String!) {
    unlike(input: { likeableType: $likeableType, likeableId: $likeableId }) {
      likesCount
    }
  }
`
