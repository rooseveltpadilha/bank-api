import express from "express";
import fs from 'fs';

import cors from 'cors'

const app = express();
import accountsRouter from "../routes/accounts.mjs";
const port = 3000;
import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.fileName = "accounts.json"
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "my-bank-api.log" })
  ],
  format: combine(
    label({ label: "my-bank-api" }),
    timestamp(),
    myFormat
  )
});

app.use(express.json());
app.use(cors());
app.use("/account", accountsRouter);

app.listen(port, async () => {
  try {
    await fs.promises.readFile(global.fileName, "utf8");
    console.log(`Server inicialized at ${port}`);
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: []
    };
    fs.promises.writeFile(global.fileName, JSON.stringify(initialJson)).catch(err => { logger.error(err) });
  }
})
