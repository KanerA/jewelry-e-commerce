export const resolvers = {
    Query: {
        GetAll: () => ["assaf", "kaner"]
    },
    Mutation: {
        AddWord: (_, { word }) => { console.log(word); return ["assaf", "kaner"]; }
    }
};
