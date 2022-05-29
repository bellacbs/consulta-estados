import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonBack } from "../../components/buttonBack/ButtonBack"
import { StateCard } from "../../components/stateCard/StateCard"
import { TitleDescription } from "../../components/titleDescription/TitleDescription"
import { useRequestData } from "../../hooks/useRequestData"


export const DetailAllDataPage = () => {

    const [data, getData] = useRequestData([], "/v2/estados")

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const states = data?.data && data.data.estados.map((state, index) => {
        return(
            <div key={index}>
                <StateCard state={state}/>
            </div>
        )
    })

    return(
        <div>
            <TitleDescription title={"Estados Brasileiros"}/>
            <ButtonBack/>

            {data && data.data && data.data.estados.length > 0 ?
                <>{states}</>
                :
                <p>Carregando...</p>
            }

        </div>
    )
}