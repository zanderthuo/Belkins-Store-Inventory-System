import express from 'express'
import { createItemController, getAlltemsController, getItemByIDController, updateItemController, deleteItemController } from '../controllers/itemController.js';

const router = express.Router();

router.post('/create-item', createItemController)
router.get('/getAll-items', getAlltemsController)
router.get('/getItem/:id', getItemByIDController)
router.put('/updateItem/:id', updateItemController)
router.delete('/deleteItem/:id', deleteItemController)



export default router