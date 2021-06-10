import { gql } from '@apollo/client'

export default gql`
  mutation LikeMutation($likeableId: String!, $likeableType: String!) {
    like(input: { likeableType: $likeableType, likeableId: $likeableId }) {
      likesCount
    }
  }
`
