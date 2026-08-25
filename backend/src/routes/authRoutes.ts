import { Router } from 'express';
import { registerPharmacy, login } from '../controllers/authController';

const router = Router();

router.post('/register', registerPharmacy);
router.post('/login', login);

export default router;
