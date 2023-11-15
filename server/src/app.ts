import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";

export const app: Application = express();

export const prisma = new PrismaClient();

const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173', // Permite apenas solicitações deste domínio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite incluir cookies na solicitação (se aplicável)
    optionsSuccessStatus: 204, // Alguns navegadores (por exemplo, Chromium) podem enviar um status 204
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);