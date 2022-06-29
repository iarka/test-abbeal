import React from 'react'
import { render, screen } from '@testing-library/react'
import FilmCard from './FilmCard'

test('display information for FilmCard component', async () => {
  render(<FilmCard film={'https://api.themoviedb.org/3/movie/popular?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=1'}/>)

  const FilmCardImages = await screen.findAllByRole('img', { name: /moviefinder$/i })
  expect(FilmCardImages).toHaveLength(1)
})
