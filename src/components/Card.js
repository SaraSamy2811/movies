import { Link, useLocation } from 'react-router-dom'
import { AiTwotoneStar } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const imagePath = "https://image.tmdb.org/t/p/w500"
const Card = ({movie}) => {

  const location = useLocation()
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location])

  return (
    <div className=' h-96 border rounded mx-5' key={movie.id}>
        <img className='h-4/5  w-full rounded-tl rounded-tr' src={`${imagePath}${movie.poster_path}`} alt="" />
        <div className='flex justify-between'>
            <Link to={`/${url.includes('/favorite') ? "favorite/" : ''}${movie.id}`} className='text-lg font-bold hover:text-blue-400'>{movie.title}{movie.name}</Link>
          <div className='flex gap-1 items-center'>
            <span>
                {movie.vote_average}
            </span>
            <AiTwotoneStar className=' text-yellow-300' />
          </div>
        </div>
  </div>
  )
}

export default Card