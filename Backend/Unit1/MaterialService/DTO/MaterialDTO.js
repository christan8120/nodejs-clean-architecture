const MaterialDTO = (material) => {
  const Mapper = () => {    
    const { CreatedOn, ModifiedOn, ...result } = material;
    return result || {};    
  }

  return Mapper();
}

export default MaterialDTO;