import { useNavigate } from "react-router-dom"
import "./styled.css"

export const ButtonBack = () => {
    const navigate = useNavigate()
    return (
        <button id ={"btn_back"} onClick={() => navigate(-1)}>Voltar</button>
    )
}