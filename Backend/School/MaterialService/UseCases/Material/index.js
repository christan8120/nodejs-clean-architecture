import buildAddMaterial from './AddMaterial.js';
import buildDeleteMaterial from './DeleteMaterial.js';
import {buildGetMaterial, buildGetMaterialById} from './GetMaterial.js';
import { buildUpdateMaterial, buildUpdateMaterialInReview } from './UpdateMaterial.js';
import makeDB from '../../Infrastructure/Database/LocalVariable/index.js';

const addMaterial = buildAddMaterial({db: makeDB});
const deleteMaterial = buildDeleteMaterial({db: makeDB});
const getMaterial = buildGetMaterial({db: makeDB});
const getMaterialById = buildGetMaterialById({db: makeDB});
const updateMaterial = buildUpdateMaterial({db: makeDB});
const updateMaterialInReview = buildUpdateMaterialInReview({db: makeDB});

const materialUsecase = Object.freeze({
  addMaterial,
  deleteMaterial,
  getMaterial,
  getMaterialById,
  updateMaterial,
  updateMaterialInReview
});

export default materialUsecase;