import { Router } from 'express'
import controller from '../controllers/users'

const router = Router()
const { create, find } = controller

router.get('/', find)
router.post('/register', create)

export default router