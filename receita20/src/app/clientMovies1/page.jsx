"use client"
import { useState } from "react"

export default function Home() {
    const [resultMovies, setResultMovies] = useState([])
    const [titleSearchKey, setTitleSearchKey] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleAction(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const titleSearchKey = formData.get("titleSearchKey")
        setTitleSearchKey(titleSearchKey)
        setIsSubmitting(true)
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
        setIsSubmitting(false)
    }

    return (
        <div>
            <MovieForm handleAction={handleAction} titleSearchKey={titleSearchKey} setTitleSearchKey={setTitleSearchKey} isSubmitting={isSubmitting} />
            <MovieTable movies={resultMovies} />
        </div>
    )
}

export function MovieForm({ handleAction, titleSearchKey, setTitleSearchKey, isSubmitting }) {
    return (
        <form onSubmit={handleAction} className="flex flex-col items-center my-4">
            <label htmlFor="idTitleSearchKey">Título</label>
            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                value={titleSearchKey}
                onChange={(e) => setTitleSearchKey(e.target.value)}
            />

            <button type="submit" className={` rounded-full px-4 py-2 ${isSubmitting ? "text-black bg-gray-50" : "text-white bg-blue-700"}`} disabled={isSubmitting}>
                {isSubmitting ? "Pesquisando..." : "Pesquisar"}
            </button>
        </form>
    )
}

export function MovieTable({ movies }) {
    return (
        <div>
            {movies.map((m) => (
                <div key={m.imdbID}>
                    <center>
                        <img src={m.Poster} alt={m.Title} />
                        <span>{m.Title}</span>
                        <br />
                        <span>{m.Type}</span>
                        <br />
                        <span>{m.Year}</span>
                    </center>
                    <br />
                </div>
            ))}
        </div>
    )
}
