import {Router, Request, Response} from 'express'
import Joi from 'joi'
import { createValidator } from 'express-joi-validation';
//custom imports
import {login, register} from '../../controllers/auth/authController'

const validator = createValidator({});

//Validation Schema
const registrationSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
});


const router = Router();

router.post('/register',validator.body(registrationSchema), register);

router.post('/login',validator.body(loginSchema), login);

export default router;