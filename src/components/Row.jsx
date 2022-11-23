import React from 'react'
import { useState, useEffect } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(fetchURL)
            const data = await response.json()
            setMovies(data.results)
            
        }
        fetchData()
    },[fetchURL])

    const slideLeft = ()=>{
        const slider = document.getElementById('slider'+rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = ()=>{
        const slider = document.getElementById('slider'+rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div>
        <h1 className='text-white md:text-xl font-bold p-4'>{title}</h1>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden top-16 group-hover:block ' size={30}/>
            <div className='p-2 w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap' id={'slider'+rowID}>
                {movies.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white absolute right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden top-16 group-hover:block ' size={30}/>
        </div>
    </div>
  )
}

export default Row