import express from 'express';
import {
    emailSender,
    emailCancelacion,
    emailFormulario
} from '../controller/emailController.js';

const router = express.Router();

router.post('/', emailSender);
router.post('/cancelacion', emailCancelacion);
router.post('/info', emailFormulario);

export default router;