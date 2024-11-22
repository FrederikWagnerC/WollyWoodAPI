import express from 'express';
import { PosterModel } from '../model/poster.model.js';

export const PosterController = express.Router();

PosterController.get('/posters', async (req, res) => {
    console.log('get all posters');
    
    let posters = await PosterModel.getAllPosters();
    res.send(posters);
});

PosterController.get('/posters/:id([0-9]*)', async (req, res) => {
    const data = await PosterModel.getPosterById(req.params.id);
    console.log(data);
    res.send(data);
});

PosterController.post('/posters', async (req, res) => { 
    const data = await PosterModel.createPoster(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

PosterController.put('/posters', async (req, res) => {
    const data = await PosterModel.updatePoster(req.body);
    res.send(data);
    console.log(req.body);
});

PosterController.delete('/posters', async (req, res) => {
    const data = await PosterModel.deletePoster(req.body);
    res.send(data);
    console.log(req.body);
});