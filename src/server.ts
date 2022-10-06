import express from 'express';
const app = express();
import UsersController from '@controllers/UsersController';

app.get('/', (req, res) => {
    return res.json({message: 'Hello world com typescript! blablab'});
});

app.listen(3333);