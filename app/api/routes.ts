import { Router } from 'express';
import GeckosRoutes from './geckos/geckos.routes';
const router = Router();
router.use('/geckos', GeckosRoutes);
//test data
export default router;
