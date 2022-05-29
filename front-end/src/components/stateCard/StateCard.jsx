import { useNavigate } from "react-router-dom"
import { goToDetailPage } from "../../routes/coodinator"
import "./styled.css"

export const StateCard = ({ state }) => {
    const navigate = useNavigate()
    return (
        <div className={"card_container"}>
            <p className={"name_state"}>{state.nome}</p>
            {state.populacao && <p>UF: {state.uf}</p>}
            {state.populacao && <p>População: {state.populacao}</p>}
            {!state.populacao && <button onClick={() => goToDetailPage(navigate,state.uf,state.nome)}>Sigla e População</button>}
        </div>
    )
}