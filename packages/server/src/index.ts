import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typedefs";

const PORT = 4000;

const startApolloServer = async () => {
    const server = new ApolloServer({
        resolvers: resolvers,
        typeDefs: typeDefs,
        csrfPrevention: true
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    });
    console.log(
        "server is running ", url
    );

};

startApolloServer();