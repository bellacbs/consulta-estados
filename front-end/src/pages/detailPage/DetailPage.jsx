import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"

import { StateDetailCard } from "../../components/stateDetailCard/stateDetailCard"
import { TitleDescription } from "../../components/titleDescription/TitleDescription"
import { ButtonBack } from "../../components/buttonBack/ButtonBack"

export const DetailPage = () => {
    const params = useParams()

    const [data, getData] = useRequestData({}, `/estados/${params.initials}`)

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <TitleDescription title={`Detalhes do Estado ${params.name}`}/>
            <ButtonBack/>
            {data && data.data && data.data.uf ?
                <StateDetailCard state={data.data} />
                :
                <p>Carregando...</p>}
        </div>
    )
}