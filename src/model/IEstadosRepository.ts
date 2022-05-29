export interface IEstadosRepository{
    pegarNomeESigla(): Promise<any>
    pegarId(sigla: string): Promise<any>
    pegarPopulacaoPorSigla(id: string): Promise<any>
}