const buildMakeMaterial = ({}) => {
  const makeMaterial = ({
    Id,
    Name,
    IsActive,    
    CreatedOn = Date.now(),
    ModifiedOn = Date.now()
  }) => {    
    if(!Id){
      throw new Error("Material must have an id");
    }
    if(!Name){
      throw new Error("Material must have a name");
    }
    if(IsActive != 1 && IsActive != 0){
      throw new Error("Material must have a valid active status");
    }
    
    return Object.freeze({
      getId: () => Id,
      getName: () => Name,
      getIsActive: () => IsActive,
      getCreatedOn: () => CreatedOn,
      getModifiedOn: () => ModifiedOn,      
      delete: () => {
        IsActive = 0
      },      
      prepareAdd: () => {
        return {
          Id, 
          Name,
          IsActive,
          CreatedOn,
          ModifiedOn
        }
      },
      prepareUpdate: (newMaterial) => {                
        return {
          Id: newMaterial.Id,
          Name: newMaterial.Name,
          IsActive: newMaterial.IsActive,
          CreatedOn,
          ModifiedOn: Date.now(),          
        }
      },
      prepareSoftDelete: () => {
        return {
          Id,
          Name,
          IsActive : 0,
          CreatedOn,
          ModifiedOn: Date.now()
        }
      }
    });
  }

  return makeMaterial;
}

export default buildMakeMaterial;