import dotenv from 'dotenv';
import express from 'express';
import { PosterController } from './controller/poster.controller.js';
import { GenreController } from './controller/genre.controller.js';
import { CartlineController } from './controller/cartline.controller.js';
import { GenrePosterRelController } from './controller/genre_poster_rel.controller.js';
import { UserProfileController } from './controller/user_profile.controller.js';
import { UserRatingModel } from './model/user_ratings.model.js';

dotenv.config();


const port = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use (PosterController)
app.use(GenreController)
app.use(CartlineController)
app.use(GenrePosterRelController)
app.use(UserProfileController)
app.use(UserProfileController)


app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});

 
