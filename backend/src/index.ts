import express, { Router } from "express";

const app = express();
app.get("/artist", (req, res) => {
  res.send("helloo");
});

app.listen(5555, () => {
  console.log("listenning");
});
