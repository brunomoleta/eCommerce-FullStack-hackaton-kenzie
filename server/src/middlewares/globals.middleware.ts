import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../errors/AppError.error";
import { verify } from "jsonwebtoken";

export const bodyValidator = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    const validatedBody = schema.parse(req.body);

    req.body = validatedBody;

    return next();
};

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError("Token não informado, faça login e tente novamente!", 401);

    const token = authorization.split(" ")[1];

    const decoded = verify(token, process.env.SECRET_KEY!);

    res.locals.decoded = decoded;

    return next();
};

export const verifyPermissions = (req: Request, res: Response, next: NextFunction): void => {
    const { decoded } = res.locals;

    const user = res.locals.user;

    if (user.id == decoded.sub) return next();
    
    throw new AppError("Apenas o proprietario pode realizar esse tipo de ação.", 403);
};