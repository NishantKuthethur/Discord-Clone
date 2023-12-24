import { Request, Response} from 'express'
import User from '../../models/schemas/auth/userSchema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface LoginRequest{
    email: string;
    password: string;
}

const login = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body as LoginRequest;

        const user = await User.findOne({ email: email.toLowerCase() });

        if(user && (await bcrypt.compare(password, user.password))){
            //send token
            const token = jwt.sign(
                {
                userId: user._id,
                email
                },
                process.env.TOKEN_KEY!,
                { expiresIn: "24h" }
            );

            return res.status(200).json({
                userDetails:{
                    email: user.email,
                    token: token,
                    username: user.username
                }
            });
        }

        return res.status(400).send("Invalid credentials. Please try Again");

    }catch(error){
        return res.status(500).send("Error occurred while registering");
    }
}

export default login;