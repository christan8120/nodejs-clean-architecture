const buildMakeDB = ({db, table}) => {
  const get = () => {        
    return db;
  }

  const getById = (id) => {    
    return db.filter(d => d.Id == id)[0];
  }

  const getByCustom = async (filter) => {    
    return db.filter((d) => {      
      for (var key in filter) {
        if (d[key] === undefined || d[key] != filter[key])
          return false;
      }
      return true;
    })[0];
  }

  const add = (data) => {
    db.push({ id: db.length + 1, ...data});     
  }

  const update = (_id, data) => {
    const index = db.findIndex((d => d.id == _id));    
    db[index] = { id: _id, ...data};    
  }

  const remove = (id) => {
    db = db.filter(d => d.Id != id);
  }

  return Object.freeze({
    get,
    getById,
    getByCustom,
    add,
    update,
    remove
  });  
}

export default buildMakeDB;