import { Request, Response} from 'express';
import User from '../../models/schemas/auth/userSchema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
interface RegisterRequest {
    email: string;
    username: string;
    password: string;
}

const SALT_ROUNDS = 10;

const register = async (req: Request, res: Response) => {
    try{
        const { email, username, password } = req.body as RegisterRequest;

        //Check if user exists
        const userExists = await User.exists({ email: email.toLowerCase() })

        if(userExists){
            return res.status(409).send("E-mail already in use");
        }

        //Hash the password
        const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        //Create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        //TODO: Replace with actual JWT token creation logic
        const token = jwt.sign(
            {
            userId: user._id,
            email
            },
            process.env.TOKEN_KEY!,
            { expiresIn: "24h" }
        );

        res.status(200).json({
            userDetails:{
                email: user.email,
                token: token,
                username: user.username
            }
        });
    }catch(error){
        return res.status(500).send("Error occurred while registering");
    }
}

export default register;