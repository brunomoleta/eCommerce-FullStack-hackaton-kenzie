import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";
import cors from "cors";

export const app: Application = express();

export const prisma = new PrismaClient();

const regexPattern: RegExp = /.durvalmusicshop.*\.vercel\.app.*/;
const localUrl: string = "http://localhost:5173";
const acceptedValuesArray = [regexPattern, localUrl]

const corsOptions = {
  origin: acceptedValuesArray,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);
