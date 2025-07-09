import { Router } from 'express'
import { getAllElectronic, createElectionic, deleteElectionic, updateElectionic } from '../controller/dbController.js'

const router = Router()


router.get('/', getAllElectronic)
router.post('/', createElectionic)
router.delete('/:id', deleteElectionic)
router.put('/:id', updateElectionic)



export default router