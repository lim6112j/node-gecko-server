import { Router } from 'express';
import * as Controller from './geckos.controller';
const router = Router();
router.route('/').get(Controller.getGeckos);
router.route('/:id').get(Controller.getGeckoById);
router.route('/').post(Controller.addGecko);
router.route('/:id').patch(Controller.updateGeckoById);
router.route('/:id').delete(Controller.deleteGeckoById);
export default router;
