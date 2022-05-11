const makePostMaterial = ({ addMaterial, materialDTO }) => {
  const postMaterial = (req, res, next) => {
    try{            
      const { Id, Name, IsActive } = req.body
      const addedMaterial = addMaterial({Id, Name, IsActive});      
      res.status(200).json(materialDTO(addedMaterial));
    }
    catch{
      return next();
    }
  }

  return postMaterial;
}

const makeGetMaterialById = ({ getMaterialById, materialDTO }) => {
  const _getMaterialById = (req, res, next) => {
    try{      
      const materials = getMaterialById({id: req.params.id})

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
  const _getMaterial = (req, res, next) => {
    try{
      const materials = getMaterial();
      res.status(200).json(materials.map(m => { return materialDTO(m)}));
    }
    catch{
      return next();
    }
  }

  return _getMaterial;
}

const makeUpdateMaterial = ({ updateMaterial, materialDTO }) => {
  const _updateMaterial = (req, res, next) => {
    try{
      const { Id, Name, IsActive } = req.body;      
      const updatedMaterial = updateMaterial({ Id, Name, IsActive});      
      res.status(200).json(materialDTO(updatedMaterial));
    }
    catch(err){      
      return next();
    }
  }

  return _updateMaterial;
}

const makeDeleteMaterial = ({ deleteMaterial, materialDTO}) => {
  const _deleteMaterial = (req, res, next) => {
    try{
      const id = req.params.id;
      const deletedMaterial = deleteMaterial({id: id});
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