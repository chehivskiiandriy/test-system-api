import express from 'express';

import models from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await models.groupUser.findAll();
    res.status(200).json(users);
  } catch (e) {
    res.send('bad');
  }
})

export default router;