import makeMaterial from "../../Domain/index.js";

const buildRemoveMaterial = ({db}) => {
  const removeMaterial = async ({id}) => {
    const oldMaterial = await db.getByCustom({MaterialId: id});    
    const material = makeMaterial(oldMaterial).prepareSoftDelete();
    db.update(oldMaterial.id, material);
    return material;
  }

  return removeMaterial;
}

export default buildRemoveMaterial;