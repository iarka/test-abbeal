import React from 'react'
import * as PropTypes from 'prop-types'

FilmCard.propTypes = { film: PropTypes.arrayOf(PropTypes.any) }

function FilmCard (props) {
  const { film } = props
  return (
    <li className="relative" style={{ width: 138 }}>
        <div className="group block rounded-lg overflow-hidden w-full">
            <img src={'https://image.tmdb.org/t/p/original/' + film.poster_path} alt="" className="object-cover" />
        </div>
        <div className="tex">
            <p className="mt-2 block text-sm font-bold text-white">{film.title}</p>
            <p className="block text-xs text-gray-500">{film.release_date}</p>
        </div>
    </li>
  )
}

export default FilmCard
