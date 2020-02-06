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
export const GET_RESTAURANTS = gql`
  query getRestaurants {
    restaurants{
      id
      name
      city
      delivTime,
      coverPhoto
    }
  }
`;
export const GET_RESTAURANT = gql`
  query getRestaurant($name: String!) {
    restaurant(name: $name){
      id
      name
      address
      description
      coverPhoto
      menu {
        id
        name
        photo
        meals {
          id
          name
          price
          extras {
            id
            name
            price
          }
        }
      }
    }
  }
`;
