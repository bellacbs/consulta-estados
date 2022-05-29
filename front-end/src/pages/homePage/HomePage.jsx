import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { StateCard } from "../../components/stateCard/StateCard"
import { TitleDescription } from "../../components/titleDescription/TitleDescription"
import { useRequestData } from "../../hooks/useRequestData"
import { goToDetailAllDataPage } from "../../routes/coodinator"
import "./styled.css"

export const HomePage = () => {
    const [data, getData] = useRequestData([], "/estados")
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const states = data?.data && data.data.map((state, index) => {
        return (
            <div key={index}>
                <StateCard state={state} />
            </div>
        )
    })

    return (
        <div className={"page_container"}>
            <TitleDescription title={"Estados Brasileiros"}/>
            <button onClick={() => goToDetailAllDataPage(navigate)}>Ver Detalhes de todos os estados</button>
            {data && data.data && data.data.length > 0 ?
                <>{states}</>
                :
                <p>Carregando...</p>
            }

        </div>
    )
}