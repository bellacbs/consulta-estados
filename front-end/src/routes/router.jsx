import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailAllDataPage } from '../pages/detailAllDataPage/DetailAllDataPage'
import { DetailPage } from '../pages/detailPage/DetailPage'
import { HomePage } from '../pages/homePage/HomePage'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:initials/:name" element={<DetailPage />} />
                <Route path="/detailalldata" element={<DetailAllDataPage />} />
            </Routes>
        </BrowserRouter>
    )

}