import express from 'express';

import models from '../db/models';

const router = express.Router();

router.post('/', async (req, res) => {

  const user = await models.user.create(req.body);

  res.status(201).json(user);
})

router.get('/', async (req, res) => {
  const users = await models.user.findAll();

  res.status(200).json(users);
})

router.get('/:id', async (req, res) => {
  const user = await models.user.findOne({ where: { id: req.params.id } });

  res.status(200).json(user);
})

export default router;