import express, { Router } from "express";

import cors from "cors";

import { artistRouter } from "./modules";

const app = express();

app.use("/artist", artistRouter);

app.listen(5555, () => {
  console.log("listenning");
});
