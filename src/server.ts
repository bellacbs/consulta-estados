import express from "express";
import cors from 'cors'
import { EstadosController } from './controller/EstadosController'

const app = express();

app.use(express.json());
app.use(cors())

const estadosController = new EstadosController()

app.get("/estados", (request, response) => estadosController.pegarNomeESigla(request, response))
app.get("/estados/:sigla", (request, response) => estadosController.pegarEstadoPorSigla(request, response))
app.get("/v4/estados", (request, response) => estadosController.pegarTodosEstados(request, response))




module.exports = app