//const makeMaterial = require("../../Domain/Unit1");

const buildGetMaterialById = ({db}) => {
  const getMaterialById = async ({id}) => {
    const material = await db.getByCustom({MaterialId: id});
    return material;
  }  

  return getMaterialById;
}

const buildGetMaterial = ({db}) => {
  const getMaterial = async () => {    
    const material = await db.get();     
    return material;
  }

  return getMaterial;
}

export { buildGetMaterial, buildGetMaterialById };