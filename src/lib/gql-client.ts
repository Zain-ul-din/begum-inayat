// import { ApolloClient } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const gqlEndPoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENT_FUL_SPACE_KEY}`;
export const gqlHeaders = {
  Authorization: `Bearer ${process.env.CONTENT_FUL_API_KEY}`
};

// const gqlClient = new ApolloClient({
//   uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENT_FUL_SPACE_KEY}`,
//   headers: {
//     Authorization: `Bearer ${process.env.CONTENT_FUL_API_KEY}`
//   }
// });

// export default gqlClient;
