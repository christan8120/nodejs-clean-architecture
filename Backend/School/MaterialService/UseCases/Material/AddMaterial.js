import makeMaterial from "../../Domain/index.js";

const buildAddMaterial = ({db}) => {
  const addMaterial = (materialData) => {        
    try{
      const material = makeMaterial({...materialData}).prepareAdd();
      db.add(material);            
      return material;
    }
    catch(err){
      console.log(err);
    }
  }

  return addMaterial;
}

export default buildAddMaterial;