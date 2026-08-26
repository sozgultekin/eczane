import { Router } from 'express';
import { getInventory, addProduct, addStock } from '../controllers/inventoryController';

const router = Router();

router.get('/', getInventory);
router.post('/product', addProduct);
router.post('/stock', addStock);

export default router;
