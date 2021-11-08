import express from 'express';
import initialRenderController from './initialRenderController.js';

const router = express.Router();

router.get('/', initialRenderController);

export default router;