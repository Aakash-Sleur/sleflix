import React, {useState, useEffect} from 'react'
import '../App.css'
import axios from '../Utils/Axios'
import requests from '../Utils/Requests'

const Banner = () => {

    const [movies, setMovie] = useState([])

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n-1) + " ..." :
        string
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData()
    }, []);


  return (
    <header className='relative h-[448px] text-white object-contain' style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className="ml-[30px] pt-[140px] h-[190px]">
            <h1 className="text-6xl pb-2 font-extrabold">
                {movies?.title || movies?.name || movies?.orginals_name}
            </h1>
            <div className="mt-5">
                <button className='cursor-pointer text-white outline--none border-0 font-bold rounded-sm px-8 mr-4 py-2 bg-[#33333380] hover:text-black hover:bg-[#e6e6e6] hover:transition-all hover:delay-400'>Play</button>
                <button className='cursor-pointer text-white outline--none border-0 font-bold rounded-sm px-8 mr-4 py-2 bg-[#33333380] hover:text-black hover:bg-[#e6e6e6] hover:transition-all hover:delay-400'>My List</button>
            </div>
            <h1 className="w-[45rem] leading-snug pt-3 text-sm max-w-[300px] h-[80px]">{truncate(`${movies?.overview}`, 150)}</h1>
        </div>
        <div className="banner__fadeBottom h-[16.4rem]" />
    </header>
  )
}

export default Banner