import React from 'react'
import { useSelector } from 'react-redux'
import { selectTrending } from '../features/movie/movieSlice'
import { Link } from 'react-router-dom'


const Trendings = () => {

  const movies = useSelector(selectTrending)

  return (
    <div className='text-white pt-5'>
      <h1 className='text-lg font-semibold'>Trendings</h1>
      <div className='mt-2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-11'>
        {movies && movies.slice(0,4).map((item, key) => 
          <div key={key}>
            <div className='my-0 md:my-5 relative rounded-lg overflow-hidden transition duration-300 border-2 border-transparent hover:border-white hover:scale-105 '>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt="" className='w-full' />
              </Link>
            </div>
          </div>
      )}
      </div>
    </div>
  )
}

export default Trendings