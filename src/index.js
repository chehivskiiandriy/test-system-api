import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import models from './db/models';
import user from './routes/user';
import group from './routes/group';
import groupUser from './routes/groupUser';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:8081'
}));


app.use('/api/user', user);
app.use('/api/group', group);
app.use('/api/group-user', groupUser)

models.sequelize.sync().then(() => {
  console.log('sequelize');
})

app.listen(8081, () =>
  console.log("Running on localhost:8081")
);