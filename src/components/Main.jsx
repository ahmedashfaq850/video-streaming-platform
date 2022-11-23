import React from "react";
import request from "../Requests";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(request.requestPopular);
      setMovies(response.data.results);
    };
    fetchData();
  }, []);



  return (
    <div className="w-full h-[650px] text-white">
      <div className="w-full h-full">
      <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4
            ">{movie?.title}</h1>
            <div className="mb-6">
                <button className="border rounded text-black bg-gray-300 border-gray-300 py-2 px-5">Play</button>
                <button className="border rounded ml-2 text-white border-gray-300 py-2 px-5">Watch Later</button>
            </div>
            <div>
                <p className="text-sm text-gray-300 mb-2">Released: {movie?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
