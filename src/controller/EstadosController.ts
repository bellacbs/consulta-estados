import {Request, Response} from 'express'
import { EstadosBusiness } from '../business/EstadosBusiness'
import { EstadosDataBase } from '../data/EstadosDataBase'

export class EstadosController{
    private estadosBusiness: EstadosBusiness

    constructor(){
        this.estadosBusiness = new EstadosBusiness(new EstadosDataBase)

    }
    async pegarNomeESigla(req: Request, res: Response){
        try{
            const dados = await this.estadosBusiness.pegarNomeESigla()

            res.status(200).send(dados)

        }catch(error: any){
            res.status(error.code || 500).send({ error: error.message } || { error: "Erro Interno do Servidor" });
        }
    }

    async pegarEstadoPorSigla(req: Request, res: Response){
        try{
            const sigla = req.params.sigla

            const dados = await this.estadosBusiness.pegarEstadoPorSigla(sigla)

            res.status(200).send(dados)

        }catch(error: any){
            res.status(error.code || 500).send({ error: error.message } || { error: "Erro Interno do Servidor" });
        }
    }

    async pegarTodosEstados(req: Request, res: Response){
        try{
            const dados = await this.estadosBusiness.pegarTodosEstados()

            res.status(200).send(dados)

        }catch(error: any){
            res.status(error.code || 500).send({ error: error.message } || { error: "Erro Interno do Servidor" });    
        }
    }
}