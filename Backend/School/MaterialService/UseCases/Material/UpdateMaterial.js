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

const buildUpdateMaterialInReview = ({db}) => {
  const updateMaterialInReview = (Id, IsInReview) => {
    const oldMaterial = db.getById(Id);    
    const material = makeMaterial(oldMaterial).prepareUpdateMaterialInReview(IsInReview);
    db.update(material);
    return material;
  }
  return updateMaterialInReview;
}

export {
  buildUpdateMaterial,
  buildUpdateMaterialInReview
};