import express from 'express';
import { GenreModel } from '../model/genre.model.js';

export const GenreController = express.Router();

GenreController.get('/genres', async (req, res) => {
    let genres = await GenreModel.getAllGenres();
    res.send(genres);
});

GenreController.get('/genres/:id([0-9]*)', async (req, res) => {
    const data = await GenreModel.getGenreById(req.params.id);
    console.log(data);
    res.send(data);
});

GenreController.post('/genres', async (req, res) => {
    const data = await GenreModel.createGenre(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

GenreController.put('/genres', async (req, res) => {
    const data = await GenreModel.updateGenre(req.body);
    res.send(data);
    console.log(req.body);
});

GenreController.delete('/genres', async (req, res) => {
    const data = await GenreModel.deleteGenre(req.body);
    res.send(data);
    console.log(req.body);
});