import { Router } from 'express'
import controller from '../controllers/users'

const router = Router()
const { create, find, login } = controller

router.get('/', find)
router.post('/register', create)
router.post('/login', login)

export default router