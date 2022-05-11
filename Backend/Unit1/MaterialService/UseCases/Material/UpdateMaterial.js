import makeMaterial from "../../Domain/index.js";

const buildUpdateMaterial = ({db}) => {
  const updateMaterial = (materialData) => {    
    const oldMaterial = db.getById(materialData.Id);
    const material = makeMaterial(oldMaterial).prepareUpdate(materialData);        
    db.update(material);
    return material;
  } 

  return updateMaterial;
}

export default buildUpdateMaterial;