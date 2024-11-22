import express from 'express';
import { GenrePosterRelModel } from '../model/genre_poster_rel.model.js';

export const GenrePosterRelController = express.Router();

GenrePosterRelController.get('/genre_poster_rel', async (req, res) => {
    let genres = await GenrePosterRelModel.getAllGenres();
    res.send(genres);
});

GenrePosterRelController.get('/genre_poster_rel/:id([0-9]*)', async (req, res) => {
    const data = await GenrePosterRelModel.getGenreById(req.params.id);
    console.log(data);
    res.send(data);
});

GenrePosterRelController.post('/genre_poster_rel', async (req, res) => {
    const data = await GenrePosterRelModel.createGenre(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

GenrePosterRelController.put('/genre_poster_rel', async (req, res) => {
    const data = await GenrePosterRelModel.updateGenre(req.body);
    res.send(data);
    console.log(req.body);
});

GenrePosterRelController.delete('/genre_poster_rel', async (req, res) => {
    const data = await GenrePosterRelModel.deleteGenre(req.body);
    res.send(data);
    console.log(req.body);
});