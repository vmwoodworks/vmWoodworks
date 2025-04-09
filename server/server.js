const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const db = require('./config/connection'); // Ensure this is correctly configured
const { typeDefs, resolvers } = require('./schemas');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables (if needed)
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // Enable introspection (useful for development)
});

const startApolloServer = async () => {
    try {
        // Start Apollo Server
        await server.start();

        // CORS middleware - added here before other middleware
        app.use(cors({
            origin: 'https://vmwoodworks.onrender.com/',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));

        // Middleware for parsing JSON and URL-encoded data
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // Apollo GraphQL Middleware
        app.use('/graphql', expressMiddleware(server));

        // Serve static files from React build folder
        app.use(express.static(path.join(__dirname, '../client/dist')));

        // Serve React's index.html for all other routes (for SPA behavior)
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });

        // Open the database connection and start the server
        db.once('open', () => {
            app.listen(PORT, () => {
                console.log(`API server running on http://localhost:${PORT}`);
                console.log(`GraphQL endpoint available at http://localhost:${PORT}/graphql`);
            });
        });

    } catch (error) {
        console.error('Error starting Apollo Server:', error);
    }
};

// Start the server
startApolloServer();