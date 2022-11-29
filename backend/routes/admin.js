import express from 'express'
import { adminAddInventoryManagerController, getAllInventoryManagerController, deleteInventoryManagerController, updateInventoryManagerController, loginAdminController, registerAdminController } from '../controllers/adminController.js';

const router = express.Router();

router.post('/admin-register', registerAdminController);
router.post('/admin-login', loginAdminController);
router.post('/admin-register-inventoryManager', adminAddInventoryManagerController);
router.get('/getAll-inventoryManagers', getAllInventoryManagerController);
router.put('/update-inventoryManager/:id', updateInventoryManagerController);
router.delete('/delete-inventoryManager/:id', deleteInventoryManagerController);


export default router;