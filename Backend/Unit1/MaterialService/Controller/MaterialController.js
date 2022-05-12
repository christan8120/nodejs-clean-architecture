const makePostMaterial = ({ addMaterial, materialDTO }) => {
  const postMaterial = (req, res, next) => {
    try{            
      const { MaterialId, Name, IsActive } = req.body
      const addedMaterial = addMaterial({MaterialId, Name, IsActive});      
      res.status(200).json(materialDTO(addedMaterial));
    }
    catch{
      return next();
    }
  }

  return postMaterial;
}

const makeGetMaterialById = ({ getMaterialById, materialDTO }) => {
  const _getMaterialById = async (req, res, next) => {
    try{      
      const materials = await getMaterialById({id: req.params.id})      
      if(!materials){
        res.status(404).json("No data found");
      }
      else{
        res.status(200).json(materialDTO(materials));
      }
    }catch(err){
      return next();
    }
  }

  return _getMaterialById;
}

const makeGetMaterial = ({ getMaterial, materialDTO }) => {
  const _getMaterial = async (req, res, next) => {
    try{
      const materials = await getMaterial();      
      res.status(200).json(materials.map(m => { return materialDTO(m)}));
    }
    catch(err){
      console.log(err);
      return next();
    }
  }

  return _getMaterial;
}

const makeUpdateMaterial = ({ updateMaterial, materialDTO }) => {
  const _updateMaterial = async (req, res, next) => {
    try{
      const { MaterialId, Name, IsActive } = req.body;          
      const updatedMaterial = await updateMaterial({ MaterialId, Name, IsActive});      
      res.status(200).json(materialDTO(updatedMaterial));
    }
    catch(err){            
      console.log(err);
      return next();
    }
  }

  return _updateMaterial;
}

const makeDeleteMaterial = ({ deleteMaterial, materialDTO}) => {
  const _deleteMaterial = async (req, res, next) => {
    try{
      const id = req.params.id;
      const deletedMaterial = await deleteMaterial({id: id});
      res.status(200).json(materialDTO(deletedMaterial));
    }
    catch(err){
      console.log(err)
      return next();
    }
  }

  return _deleteMaterial;
}
const MaterialController = Object.freeze({
  makePostMaterial,
  makeGetMaterialById,
  makeGetMaterial,
  makeUpdateMaterial,
  makeDeleteMaterial
});

export default MaterialController;