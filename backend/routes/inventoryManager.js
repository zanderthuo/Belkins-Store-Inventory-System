import express from 'express';
import { loginInventoryManagerController } from '../controllers/inventoryManagerController.js';

const router = express.Router();

router.post('/inventory-manager-login', loginInventoryManagerController)

export default router;