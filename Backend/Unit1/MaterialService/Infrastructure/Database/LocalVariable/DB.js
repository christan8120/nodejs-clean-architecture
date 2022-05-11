const buildMakeDB = ({db}) => {
  const get = () => {    
    return db;
  }

  const getById = (id) => {    
    return db.filter(d => d.Id == id)[0];
  }

  const add = (data) => {
    db.push(data);
  }

  const update = (data) => {
    db = db.map( d => {
      if (d.Id == data.Id){
        return data;
      }
      return d;
    });
  }

  const remove = (id) => {
    db = db.filter(d => d.Id != id);
  }

  return Object.freeze({
    get,
    getById,
    add,
    update,
    remove
  });  
}

export default buildMakeDB;