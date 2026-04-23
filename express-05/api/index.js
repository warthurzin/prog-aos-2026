import "dotenv/config";
import express from "express";
import cors from "cors";
import { sequelize } from "./config";
import routes from "./routes";
import { errorHandler, dateParser } from "./middlewares";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(dateParser);

app.get("/", (req, res) => {
  res.json({ message: "API de Curriculos Rodando" });
});

app.use("/api", routes);

app.use(errorHandler);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Banco de Dados Sincronizado");
    app.listen(PORT, () => console.log(`Servidor Rodando na Porta ${PORT}`));
  })
  .catch((err) => {
    console.error("Falha ao Conectar com o Banco de Dados ", err);
    process.exit(1);
  });

export default app;
