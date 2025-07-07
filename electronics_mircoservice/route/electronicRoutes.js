import { Router } from 'express'
import { getAllElectronic } from '../controller/dbController.js'

const router = Router()


router.get('/', getAllElectronic)



export default router