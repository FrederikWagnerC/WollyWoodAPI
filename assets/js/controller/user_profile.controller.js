import express from 'express';
import { UserProfileModel } from '../model/user_profile.model.js';

export const UserProfileController = express.Router();

UserProfileController.get('/user_profiles', async (req, res) => {
    let userProfiles = await UserProfileModel.getAllUserProfiles();
    res.send(userProfiles);
});

UserProfileController.get('/user_profiles/:id([0-9]*)', async (req, res) => {
    const data = await UserProfileModel.getUserProfileById(req.params.id);
    console.log(data);
    res.send(data);
});

UserProfileController.post('/user_profiles', async (req, res) => {
    const data = await UserProfileModel.createUserProfile(req.body);
    res.send(data);
    console.log(data.id);
    console.log(req.body);
});

UserProfileController.put('/user_profiles', async (req, res) => {
    const data = await UserProfileModel.updateUserProfile(req.body);
    res.send(data);
    console.log(req.body);
});

UserProfileController.delete('/user_profiles', async (req, res) => {
    const data = await UserProfileModel.deleteUserProfile(req.body);
    res.send(data);
    console.log(req.body);
});