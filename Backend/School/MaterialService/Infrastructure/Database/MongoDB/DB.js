const buildMakeDB = ({db, table}) => {
  const get = async () => {
    const dbConn = await db();
    const resultDb = await dbConn.collection(table).find({});
    const resultArray = await resultDb.toArray();    
    return resultArray.map(({ _id: id, ...res}) => ({
      id,
      ...res
    }));
  }

  const getById = async (id) => {    
    const dbConn = await db();
    const resultDb = await dbConn.collection(table).find({ _id: id });
    const resultArray = await resultDb.toArray();

    if(resultArray.length <= 0){
      return null;
    }

    const { ...res } = resultArray[0];
    return {
      id,
      ...res
    };
  }

  const getByCustom = async (filter) => {
    const dbConn = await db();
    const resultDb = await dbConn.collection(table).find(filter);
    const resultArray = await resultDb.toArray();

    return resultArray.map(({ _id: id, ...res}) => ({
      id,
      ...res
    }))[0];
  }

  const add = async (data) => {
    const { id: _id, ...toBeAdded} = data;
    const dbConn = await db();
    await dbConn
      .collection(table)
      .insertOne({
        _id,
        ...toBeAdded
      });
  }

  const update = async (_id, data) => {
    const { id, ...toBeUpdated} = data;    
    const dbConn = await db();
    await dbConn
      .collection(table)
      .updateOne({
        _id: new Object(_id)
      }, 
      {
        $set: 
        {
          ...toBeUpdated
        }
      },
      {
        upsert: true
      })    
  }

  const remove = async (id) => {
    const dbConn = await db();
    db.collection(table).deleteOne({ _id : id });    
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