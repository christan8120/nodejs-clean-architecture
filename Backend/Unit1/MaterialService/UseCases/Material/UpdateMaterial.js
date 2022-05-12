import makeMaterial from "../../Domain/index.js";

const buildUpdateMaterial = ({db}) => {
  const updateMaterial = async (materialData) => {      
    const oldMaterial = await db.getByCustom({MaterialId: materialData.MaterialId});    
    const material = makeMaterial(oldMaterial).prepareUpdate(materialData);        
    db.update(oldMaterial.id, material);    
    return material;
  } 

  return updateMaterial;
}

export default buildUpdateMaterial;