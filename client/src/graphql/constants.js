import gql from 'graphql-tag'

export const SIGN_UP_MUTATION = gql`
  mutation signupMutation(
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    signup(fullname: $fullname, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation signupMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
