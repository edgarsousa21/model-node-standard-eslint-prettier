// const app = require("./app")
import app from "./app";

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor Iniciado na Porta ${port}`);
});
