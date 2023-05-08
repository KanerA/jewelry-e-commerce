import { gql } from "apollo-server-core";
export const typeDefs = gql`
  type Query {
        GetAll: [String]
    }

    type Mutation {
        AddWord(word: String!): [String]
    }
`;
