import buildAddMaterial from './AddMaterial.js';
import buildDeleteMaterial from './DeleteMaterial.js';
import { buildGetMaterial, buildGetMaterialById } from './GetMaterial.js';
import buildUpdateMaterial from './UpdateMaterial.js';
import makeDB from '../../Infrastructure/Database/MongoDB/index.js';

const addMaterial = buildAddMaterial({db: makeDB('materials')});
const deleteMaterial = buildDeleteMaterial({db: makeDB('materials')});
const getMaterial = buildGetMaterial({db: makeDB('materials')});
const getMaterialById = buildGetMaterialById({db: makeDB('materials')});
const updateMaterial = buildUpdateMaterial({db: makeDB('materials')});

const materialUsecase = Object.freeze({
  addMaterial,
  deleteMaterial,
  getMaterial,
  getMaterialById,
  updateMaterial
});

export default materialUsecase;