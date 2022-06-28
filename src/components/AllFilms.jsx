import React from 'react'
import FilmCard from './FilmCard'
import * as PropTypes from 'prop-types'

AllFilms.propTypes = { films: PropTypes.arrayOf(PropTypes.any) }

function AllFilms (props) {
  const { films } = props
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
        {films.map((film) => (
            <FilmCard film={film} key={film.id}></FilmCard>
        ))}
    </ul>
  )
}

export default AllFilms
