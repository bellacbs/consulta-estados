export const goToDetailPage = (navigate, initials, name) => {
    navigate(`/detail/${initials}/${name}`)
}

export const goToDetailAllDataPage = (navigate) => {
    navigate("/detailalldata")
}