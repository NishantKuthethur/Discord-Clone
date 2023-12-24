import { Request as ExpressRequest } from 'express';

export interface Request extends ExpressRequest {
    user?: any; // You can replace 'any' with a more specific type if needed
}