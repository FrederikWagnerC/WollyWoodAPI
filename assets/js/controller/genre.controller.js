import express from 'express';
import { CartlineModel } from '../model/cartline.model.js';

export const CartlineController = express.Router();

CartlineController.get('/cartlines', async (req, res) => {
    let cartlines = await CartlineModel.getAllCartlines();
    res.send(cartlines);
});

CartlineController.get('/cartlines/:id([0-9]*)', async (req, res) => {
    const data = await CartlineModel.getCartlineById(req.params.id);
    console.log(data);
    res.send(data);
});

CartlineController.post('/cartlines', async (req, res) => {
    const data = await CartlineModel.createCartline(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

CartlineController.put('/cartlines', async (req, res) => {
    const data = await CartlineModel.updateCartline(req.body);
    res.send(data);
    console.log(req.body);
});

CartlineController.delete('/cartlines', async (req, res) => {
    const data = await CartlineModel.deleteCartline(req.body);
    res.send(data);
    console.log(req.body);
});