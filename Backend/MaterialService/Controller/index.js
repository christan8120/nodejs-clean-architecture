import materialController from './MaterialController.js';
import materialUsecase from '../UseCases/Material/index.js';
import MaterialDTO from '../DTO/MaterialDTO.js';

const postMaterial = materialController.makePostMaterial({addMaterial: materialUsecase.addMaterial, materialDTO: MaterialDTO});
const getMaterial = materialController.makeGetMaterial({getMaterial: materialUsecase.getMaterial, materialDTO: MaterialDTO});
const getMaterialById = materialController.makeGetMaterialById({getMaterialById: materialUsecase.getMaterialById, materialDTO: MaterialDTO});
const updateMaterial = materialController.makeUpdateMaterial({updateMaterial: materialUsecase.updateMaterial, materialDTO: MaterialDTO});
const deleteMaterial = materialController.makeDeleteMaterial({deleteMaterial: materialUsecase.deleteMaterial, materialDTO: MaterialDTO});

const Controller = Object.freeze({
  postMaterial,
  getMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial
});

export default Controller;