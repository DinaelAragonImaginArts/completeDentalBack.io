import { envio, cancelacion, informacion } from '../utils/email.js';

export const emailSender = async (req, res) => {
    const datos = req.body;
    envio(datos);
}

export const emailCancelacion = async (req, res) => {
    const datos = req.body;
    cancelacion(datos);
}

export const emailFormulario = (req, res) => {
    const datos = req.body;
    informacion(datos);
}