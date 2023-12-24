import { Response, NextFunction } from 'express';
import { Request } from '../../types/types';
import jwt from 'jsonwebtoken';

const config = process.env;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token) {
        return res.status(400).send('A token is required for authentication');
    }

    try{
        token = token.replace(/^Bearer\s+/,"");
        const decoded = jwt.verify(token, config.TOKEN_KEY!);
        req.user = decoded;
    }
    catch(error){
        return res.status(401).send('Invalid token');
    }

    return next();
}

export default verifyToken;