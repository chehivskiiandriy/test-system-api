import express from 'express';

import models from '../db/models';
import sequelize from 'sequelize';

const router = express.Router();

router.post('/', async (req, res) => {
  const user = await models.group.create(req.body);
  res.status(201).json(user);
})

router.get('/', async (req, res) => {
  const users = await models.group.findAll();
  res.status(200).json(users);
})

router.get('/ff', async (req, res) => {
  try {
    const users = await models.groupUser.findAll();
    res.status(200).json(users);
  } catch (e) {
    res.send('bad');
  }
})

router.get('/get-user-group', async (req, res) => {
  try {
    const users = await models.groupUser.findAll({
      attributes: ['groupId'],
      group: ['groupId'],
      having: sequelize.where(sequelize.fn('COUNT', sequelize.col('userId')), 2)
    });
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.send('bad');
  }
})
router.get('/:id', async (req, res) => {
  const user = await models.group.findOne({ where: { id: req.params.id } });
  res.status(200).json(user);
})

router.post('/join', async (req, res) => {
  try {
    const user = await models.groupUser.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json("");
  }

})

export default router;