import buildMakeDB from './DB.js';
let data = [];
const db = () => {  
  return data;
}

const makeDB = (table) => {
  return buildMakeDB({
    db: db(), 
    table: table
  });
}

export default makeDB;