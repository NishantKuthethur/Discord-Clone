import { Request, Response} from 'express'

const register = async (req: Request, res: Response) => {
    res.send('register route');
}

export default register;