import gql from "graphql-tag";

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
  mutation signupMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const GET_RESTAURANTS = gql`
  query getRestaurants($page: Int!, $limit: Int, $order: String) {
    restaurants(page: $page, limit: $limit, order: $order) {
      rows {
        id
        name
        city
        delivTime
        coverPhoto
      }
      count
    }
  }
`;
export const GET_RESTAURANT = gql`
  query getRestaurant($name: String!) {
    restaurant(name: $name) {
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
export const SEARCH_RESTAURANTS = gql`
  query searchRestaurants($search: String!) {
    search(search: $search) {
      rows {
        id
        name
        city
        delivTime
        coverPhoto
      }
      count
    }
  }
`;
export const ADD_RESTAURANT = gql`
  mutation addRestaurant(
    $name:String!, $city:String!, $email:String!, $address:String!,
    $phone:String!, $website:String!, $daysOpen:String!, $delivTime:String
    $hrsOpen:String!, $description:String!, $coverPhoto: Upload!
  ){
    registerRestaurant(
      name:$name, city:$city, address:$address, delivTime:$delivTime
      phone:$phone, website:$website, daysOpen:$daysOpen, email:$email
      hrsOpen:$hrsOpen, description:$description, coverPhoto:$coverPhoto
    ){ id }
  }
`;
export const VERIFY_TOKEN = gql`
  query verifyToken($token: String!){
    verifyToken(token: $token)
  }
`;
