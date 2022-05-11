import makeMaterial from "../../Domain/index.js";

const buildRemoveMaterial = ({db}) => {
  const removeMaterial = ({id}) => {
    const oldMaterial = db.getById(id);    
    const material = makeMaterial(oldMaterial).prepareSoftDelete();
    db.update(material);
    return material;
  }

  return removeMaterial;
}

export default buildRemoveMaterial;