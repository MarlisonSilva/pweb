// Nova rota ta em searchMovies/page.jsx
import data from '../../data/data.json';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey") || ""; // Pega o parâmetro ou uma string vazia

    const filteredMovies = data.filter((movie) =>
        movie.Title.toLowerCase().includes(titleSearchKey.toLowerCase())
    );

    const jsonResponse = {
        Search: filteredMovies,
        totalResults: filteredMovies.length,
        Response: filteredMovies.length > 0 ? "True" : "False",
    };

    return new Response(JSON.stringify(jsonResponse), {
        headers: { "Content-Type": "application/json" },
    });
}
