import { MongoClient } from 'mongodb';
import buildMakeDB from './DB.js';

const connectionString = ""; //process.env.CONNECTION_STRING
const dbName = "bm_material"; //process.env.DB_NAME

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = async () => {
  if(!client.isConnected){
    await client.connect();
  }  
  return client.db(dbName);
}

const makeDB = (table) => {
  return buildMakeDB({
    db: db, 
    table: table
  });
}

export default makeDB;