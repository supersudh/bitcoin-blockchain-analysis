const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();

const analysis = require('./analysis');

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGODB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function main() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db(process.env.DB_NAME).command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    await analysis(client.db(process.env.DB_NAME));
  } catch (e) {
    throw e;
  } finally {
    console.log('in finally!');
    // client.close();
    // process.exit(1);
  }
}
main().catch(console.dir);
