const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const PORT = process.env.PORT || 3001;

// middleware
app.use('/client', express.static(path.join(__dirname + '../client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
};

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

startApolloServer(typeDefs, resolvers);