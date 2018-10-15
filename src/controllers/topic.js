import { Topic } from '../db/models';

const createItem = async (req, res) => {
  const topic = await Topic.create(req.body);

  res.status(201).json(topic);
}

const getAll = async (req, res) => {
  const topic = await Topic.findAll();

  res.status(200).json(topic);
}

const getById = async (req, res) => {
  const topic = await Topic.findOne({ where: { id: req.params.id } });

  res.status(200).json(topic);
}

const deleteItem = async (req, res) => {
  Topic.destroy({ where: { id: req.body.id } })
    .then(result =>
      res.status(200).json({ ok: true })
    )
    .catch(err =>
      res.status(404).json({ error: err, message: 'Not found' })
    )
}

const updateItem = async (req, res) => {
  Topic.update(
    { name: req.body.name },
    { where: { id: req.body.id } }
  )
  .then(result =>
    res.status(200).json({ ok: true })
  )
  .catch(err =>
    res.status(404).json({ error: err, message: 'Not found' })
  )
}

export default {
  createItem,
  getAll,
  getById,
  deleteItem,
  updateItem
}
