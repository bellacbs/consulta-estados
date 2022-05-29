
export const StateDetailCard = ({state}) => {
    return(
        <div>
            <p>Sigla: {state.uf}</p>
            <p>População: {state.populacao}</p>
        </div>
    )
}