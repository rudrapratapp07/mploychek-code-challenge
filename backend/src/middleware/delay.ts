import { Request, Response, NextFunction } from 'express';

export const delayMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const delayParam = req.query.delay;
    const delay = delayParam ? parseInt(delayParam as string, 10) : 0;
    
    if (delay > 0) {
        setTimeout(() => {
            next();
        }, delay);
    } else {
        next();
    }
};
