'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const year = formData.get("year")

    if (!titleSearchKey || titleSearchKey == '') return { Search: [] }

    try {
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${year}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    } catch (err) {
        return { error: `Erro na requisição ${err}` }
    }

}