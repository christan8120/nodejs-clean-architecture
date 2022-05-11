//const makeMaterial = require("../../Domain/Unit1");

const buildGetMaterialById = ({db}) => {
  const getMaterialById = ({id}) => {
    const material = db.getById(id);
    return material;
  }  

  return getMaterialById;
}

const buildGetMaterial = ({db}) => {
  const getMaterial = () => {    
    const material = db.get();     
    return material;
  }

  return getMaterial;
}

export { buildGetMaterial, buildGetMaterialById };