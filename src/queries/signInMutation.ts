import { gql } from '@apollo/client'

export default gql`
  mutation SignInMutation($email: String!, $password: String!, $rememberMe: Boolean) {
    signIn(
      credentials: {
        email: $email,
        password: $password,
        rememberMe: $rememberMe
      }
    ) {
      token
      user {
        id
      }
    }
  }
`
