import {
  ApolloClient,
  ApolloLink,
  InMemoryCache
} from "apollo-boost";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({ uri: "http://localhost:8000/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink), // Chain it with the uploadlink
  cache: new InMemoryCache()
});

export default client;
