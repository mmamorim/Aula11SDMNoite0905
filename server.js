
import config from "config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose";

let db = mongoose.connect("mongodb://localhost/teste01").then(() => {
    console.log("conexão com banco de dados ok");
})

console.log("Abrindo super hiper servidor...");

let port = config.get("server.port");
//console.log("porta: ",porta);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", express.static("./front-end"))

import bandRoute from "./routes/bandas-rock.js"
bandRoute(app,config)
import filmesRoute from "./routes/filmes.js"
filmesRoute(app,config)


app.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`)
});

