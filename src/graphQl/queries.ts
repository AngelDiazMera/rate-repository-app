import { gql } from 'apollo-boost/lib';

export const GetRepositoriesGqlQuery = gql`
  query GetRepositoriesQuery {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
