import buildMakeDB from './DB.js';
let data = [];
const db = () => {  
  return data;
}

const makeDB = buildMakeDB({db: db()});

export default makeDB;