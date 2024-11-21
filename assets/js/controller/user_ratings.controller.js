import express from 'express';
import { UserRatingModel } from '../model/user_ratings.model.js';

export const UserRatingController = express.Router();

UserRatingController.get('/user_ratings', async (req, res) => {
    let userRatings = await UserRatingModel.getAllUserRatings();
    res.send(userRatings);
});

UserRatingController.get('/user_ratings/:id([0-9]*)', async (req, res) => {
    const data = await UserRatingModel.getUserRatingById(req.params.id);
    console.log(data);
    res.send(data);
});

UserRatingController.post('/user_ratings', async (req, res) => {
    const data = await UserRatingModel.createUserRating(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

UserRatingController.put('/user_ratings', async (req, res) => {
    const data = await UserRatingModel.updateUserRating(req.body);
    res.send(data);
    console.log(req.body);
});

UserRatingController.delete('/user_ratings', async (req, res) => {
    const data = await UserRatingModel.deleteUserRating(req.body);
    res.send(data);
    console.log(req.body);
});