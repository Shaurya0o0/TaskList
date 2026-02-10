import express from 'express'
import auth from '../middleware/auth.middleware.js'
import { getTasks, createTask, deleteTask, updateTask  } from '../controllers/task.controller.js'


const router = express.Router()
router.use(auth)
router.get('/', getTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask); 
export default router