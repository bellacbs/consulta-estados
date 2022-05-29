import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/baseUrl"

export const useRequestData = (initial, path) => {
    const [data, setData] = useState(initial)

    const getData = async() => {
        try{
            const result = await axios.get(`${BASE_URL}${path}`)
            setData(result)
        }catch(error){
            alert(error.response.data.error)
        }
    }

    return [data, getData]
}