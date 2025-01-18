import Form from "next/form"

export default async function MovieForm() {

    return (

        <Form action="/movies">

            <label htmlFor="idTitleSearchKey">Título</label>
            <br />

            <input id="idTitleSearchKey" name="titleSearchKey" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <br />

            <label htmlFor="idYear">Ano</label>
            <br />

            <input id="idYear" name="year" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <br />

            
            <button type="submit" className="text-white bg-blue-700 rounded-full px-4 py-2">Pesquisar</button>

        </Form>

    )

}