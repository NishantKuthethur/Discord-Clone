import { Request, Response} from 'express';
import User from '../../models/schemas/auth/userSchema';
import bcrypt from 'bcryptjs';

const register = async (req: Request, res: Response) => {
    try{
        const { email, username, password } = req.body;

        //Check if user exists
        const userExists = await User.exists({ email: email.toLowerCase() })

        if(userExists){
            return res.status(409).send("E-mail already in use");
        }

        //Hash the password
        const encryptedPassword = await bcrypt.hash(password, 10);

        //Create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        //create JWT token
        const token = "Token";

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