import dotenv from 'dotenv';
import express from 'express';

dotenv.config();


const port = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});


