const makePostMaterial = ({ addMaterial, materialDTO }) => {
  const postMaterial = (req, res, next) => {
    try{            
      const { MaterialId, Name, Level, IsMandatory, IsInReview, IsActive } = req.body
      const addedMaterial = addMaterial({MaterialId, Name, Level, IsMandatory, IsInReview, IsActive});      
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
      const materials = await getMaterialByCustom({MaterialId: req.params.id})

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
    catch{
      return next();
    }
  }

  return _getMaterial;
}

const makeUpdateMaterial = ({ updateMaterial, materialDTO }) => {
  const _updateMaterial = async (req, res, next) => {
    try{
      const { MaterialId, Name, Level, IsMandatory, IsInReview, IsActive } = req.body;          
      const updatedMaterial = await updateMaterial({ MaterialId, Name, Level, IsMandatory, IsInReview, IsActive});      
      res.status(200).json(materialDTO(updatedMaterial));
    }
    catch(err){            
      return next();
    }
  }

  return _updateMaterial;
}

const makeUpdateMaterialInReview = ({ updateMaterialInReview, materialDTO}) => {
  const _updatedMaterialInReview = async (req, res, next) => {
    try{
      const { MaterialId, IsInReview } = req.body;      
      const updatedMaterial = await updateMaterialInReview(MaterialId, IsInReview);
      res.status(200).json(materialDTO(updatedMaterial));
    }
    catch(err){
      console.log(err);
      return next();
    }
  }

  return _updatedMaterialInReview;
}

const makeDeleteMaterial = ({ deleteMaterial, materialDTO}) => {
  const _deleteMaterial = async (req, res, next) => {
    try{
      const MaterialId = req.params.id;
      const deletedMaterial = await deleteMaterial({id: MaterialId});
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
  makeDeleteMaterial,
  makeUpdateMaterialInReview
});

export default MaterialController;