import axios from "axios";
import { IEstadosRepository } from "../model/IEstadosRepository";

export class EstadosDataBase implements IEstadosRepository {
    async pegarNomeESigla(): Promise<any> {

        const resultado = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

        return resultado.data
    }

    async pegarId(sigla: string): Promise<number | null> {
        const resultado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}`)

        if(resultado.data.length === 0){
            return null
        }
        
        return resultado.data.id

    }

    async pegarPopulacaoPorSigla(id: string): Promise<number> {

        const resultado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${id}`)

        return resultado.data.projecao.populacao

    }

}