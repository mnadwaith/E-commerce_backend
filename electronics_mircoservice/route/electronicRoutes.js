import { Router } from 'express'
import { getAllElectronic, createElectionic, deleteElectionic } from '../controller/dbController.js'

const router = Router()


router.get('/', getAllElectronic)
router.post('/', createElectionic)
router.delete('/:id', deleteElectionic)
// router.put('/:id', getAllElectronic)



export default router