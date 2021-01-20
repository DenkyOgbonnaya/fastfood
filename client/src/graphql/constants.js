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
  query getRestaurant($id: ID!) {
    restaurant(id: $id) {
      id
      name
      address
      description
      coverPhoto
      email
      hrsOpen
      daysOpen
      owner {
        fullname
        email
      }
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
    $phone:String!, $website:String!, $daysOpen:String!, $delivTime:String!,
    $hrsOpen:String!, $description:String!, $coverPhoto: Upload!
  ){
    registerRestaurant(
      name:$name, city:$city, address:$address, delivTime:$delivTime,
      phone:$phone, website:$website, daysOpen:$daysOpen, email:$email,
      hrsOpen:$hrsOpen, description:$description, coverPhoto:$coverPhoto
    ){ id }
  }
`;
export const VERIFY_TOKEN = gql`
  query verifyToken($token: String!){
    verifyToken(token: $token)
  }
`;
export const ADD_MENU = gql`
  mutation addMenu($name: String!, $photo: Upload!, $restaurantId: ID!){
    addMenu(name: $name, photo: $photo, restaurantId: $restaurantId){
      id
    }
  }
`;
export const DELETE_MENU = gql`
  mutation deleteMenu($id: ID!){
    deleteMenu(id: $id)
  }
`;
export const ADD_DRIVER = gql`
  mutation addDriver(
    $city:String!, $email:String!, $address:String!,
    $phone:String!, $operateDays:String!,
    $operateHrs:String!
  ){
    registerDriver(
      city:$city, address:$address
      phone:$phone, operateDays:$operateDays, email:$email,
      operateHrs:$operateHrs
    ){ id }
  }
`;
export const EDIT_PROFILE = gql`
  mutation editProfile($fullname:String!, $location:String!, $phone:String!){
    editProfile(fullname:$fullname, location:$location, phone:$phone){ 
      token
    }
  }
`;
export const GET_USER_RESTAURANTS = gql`
  query getUserRestaurants($page: Int, $limit: Int) {
    userRestaurants(page: $page, limit: $limit) {
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
export const ADD_MEAL = gql`
  mutation addMeal(
    $category:String!, 
    $name:String!,
    $price:Int!,
    $extras:String!,
    $photo: Upload!,
    $restaurant: ID!,
    $menu: ID!
  ){
    addMeal(
      name:$name,
      category:$category,
      price:$price,
      extras:$extras,
      photo:$photo,
      restaurant: $restaurant,
      menuId: $menu
    ){ id }
  }
`;

export const GET_RESTAURANT_MENUS = gql`
  query getRestaurantMenus($id: ID!) {
    menus(restaurantId: $id) {
      id,
      name
    }
  }
`;
