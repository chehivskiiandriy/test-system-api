import express from 'express'

import { TopicController } from '../controllers'

const router = express.Router()

router.post('/', TopicController.createItem)
router.get('/', TopicController.getAll)
router.get('/:id', TopicController.getById)
router.delete('/', TopicController.deleteItem)
router.put('/', TopicController.updateItem)

export default router
