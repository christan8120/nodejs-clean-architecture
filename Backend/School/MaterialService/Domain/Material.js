const buildMakeMaterial = ({}) => {
  const makeMaterial = ({
    MaterialId,
    Name,
    Level,
    IsMandatory,
    IsInReview,
    IsActive,    
    CreatedOn = Date.now(),
    ModifiedOn = Date.now()
  }) => {    
    if(!MaterialId){
      throw new Error("Material must have an id");
    }
    if(!Name){
      throw new Error("Material must have a name");
    }
    if(!Level){
      throw new Error("Material must have a level");
    }
    if(IsMandatory != 1 && IsMandatory != 0){
      throw new Error("Material must have a valid mandatory status");
    }
    if(IsInReview != 1 && IsInReview != 0){
      throw new Error("Material must have a valid in review status");
    }
    if(IsActive != 1 && IsActive != 0){
      throw new Error("Material must have a valid active status");
    }
    
    return Object.freeze({
      getMaterialId: () => MaterialId,
      getName: () => Name,
      getLevel: () => Level,
      getIsMandatory: () => IsMandatory,
      getIsInReview: () => IsInReview,
      getIsActive: () => IsActive,
      getCreatedOn: () => CreatedOn,
      getModifiedOn: () => ModifiedOn,      
      delete: () => {
        IsActive = 0
      },      
      prepareAdd: () => {
        return {
          MaterialId, 
          Name,
          Level,
          IsMandatory,
          IsInReview,
          IsActive,
          CreatedOn,
          ModifiedOn
        }
      },
      prepareUpdate: (newMaterial) => {                
        return {
          MaterialId: newMaterial.MaterialId,
          Name: newMaterial.Name,
          Level: newMaterial.Level,
          IsMandatory: newMaterial.IsMandatory,
          IsInReview: newMaterial.IsInReview,
          IsActive: newMaterial.IsActive,
          CreatedOn,
          ModifiedOn: Date.now(),          
        }
      },
      prepareSoftDelete: () => {
        return {
          MaterialId,
          Name,
          Level,
          IsMandatory,
          IsInReview,
          IsActive : 0,
          CreatedOn,
          ModifiedOn: Date.now()
        }
      },
      prepareUpdateMaterialInReview: (_IsInReview) => {
        return {
          MaterialId,
          Name,
          Level,
          IsMandatory,
          IsInReview: _IsInReview,
          IsActive,
          CreatedOn,
          ModifiedOn: Date.now()
        }
      }
    });
  }

  return makeMaterial;
}

export default buildMakeMaterial;