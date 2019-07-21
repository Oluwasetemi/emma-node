import express from 'express'

import {main, mainSecond} from '../controllers/main'

console.log(main)

const router = express.Router()

//crate user
router.get('/', mainSecond)

export default router
