import React, {useState, useEffect} from 'react'
import "../App.css"
import axios from '../Utils/Axios';

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([]);
    const base_url = "http://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className="text-white ml-3 mt-5">
            <h2 className='text-2xl font-light'>{title}</h2>
            <div className="flex overflow-x-scroll space-x-5 overflow-y-hidden p-4 mt-5 snap-center snap-mandatory poster row__posters">
            {movies.map(
                (movie) => 
                   ((isLargeRow && movie.poster_path) ||
                   (!isLargeRow && movie.backdrop_path)) && (
                        <img
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name} />                       
                   )
                )}
            </div>
        </div>
    )
}

export default Row