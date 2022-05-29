import { NotFoundElementError } from "../error/NotFoundElementError"
import { IEstadosRepository } from "../model/IEstadosRepository"

export class EstadosBusiness{
    constructor(
        private estadosDataBase: IEstadosRepository
    ){
    }
    async pegarNomeESigla(){
       const estados = await this.estadosDataBase.pegarNomeESigla()

       const novosEstados = estados.map((estado: any) => {
           return {nome: estado.nome, uf: estado.sigla}
       })

       return novosEstados
    }

    async pegarEstadoPorSigla(sigla: string){
        const id = await this.estadosDataBase.pegarId(sigla)

        if(!id){
            throw new NotFoundElementError("Estado não encontrado, informe uma sigla válida")
        }

        const populacao = await this.estadosDataBase.pegarPopulacaoPorSigla(id.toString())

        const estado = {
            uf: sigla.toUpperCase(),
            populacao
        }

        return estado
   
    }

    async pegarTodosEstados(){
        const estados = await this.estadosDataBase.pegarNomeESigla()

       const novosEstados = estados.map((estado: any) => {
           return {id: estado.id,nome: estado.nome, uf: estado.sigla}
       })

        const todosEstados = await Promise.all(novosEstados.map(async(estado: any) => {
            const populacao = await this.estadosDataBase.pegarPopulacaoPorSigla(estado.id.toString())
            return{
                nome: estado.nome,
                uf: estado.uf,
                populacao
            }
        }))


        return {estados: todosEstados}
    }
    
}