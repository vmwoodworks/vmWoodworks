const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

const path = require('path');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    try {
        // Start Apollo Server
        await server.start();

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        // Apollo GraphQL Middleware
        app.use('/graphql', expressMiddleware(server));

        // Serve static files
        app.use(express.static(path.join(__dirname, '../client/dist')));

        // Serve the front-end's index.html
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });

        // Open the database connection and start the server
        db.once('open', () => {
            app.listen(PORT, () => {
                console.log(`API server running on port http://localhost:${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
            });
        });

    } catch (error) {
        console.error('Error starting Apollo Server:', error);
    }
};

// Call the async function to start the server
startApolloServer();

  