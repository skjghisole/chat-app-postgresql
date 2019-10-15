import { Router } from 'express'
import controller from '../controllers/messages'

const router = Router()

const { find, create } = controller

router.get('/', find)
router.post('/', create)

export default router