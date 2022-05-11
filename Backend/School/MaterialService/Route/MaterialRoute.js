import express from 'express';
const router = express.Router();

import controller from '../Controller/index.js';

router.get('/', controller.getMaterial);
router.get('/:id', controller.getMaterialById);
router.post('/', controller.postMaterial);
router.put('/', controller.updateMaterial);
router.delete('/:id', controller.deleteMaterial);
router.put('/inreview', controller.updateMaterialInReview);

export default router;