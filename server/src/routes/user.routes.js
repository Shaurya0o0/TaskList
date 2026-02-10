import express from 'express'
import auth from '../middleware/auth.middleware.js'
import { profile } from '../controllers/user.controller.js'


const router = express.Router()
router.get('/profile', auth, profile)
export default router