import {Router, Request, Response} from 'express'

//custom imports
import {login, register} from '../../controllers/auth/authController'

const router = Router();

router.post('/register', register);

router.post('/login', login);

export default router;