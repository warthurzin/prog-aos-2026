import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando!\n" + process.env.MESSAGE);
});

const port = process.env.PORT ?? 3000;

app.listen(port, () =>
  console.log(
    "Aplicativo de exemplo escutando na porta " +
      port +
      "\n" +
      process.env.MESSAGE,
  ),
);
