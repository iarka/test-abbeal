import React, { useEffect, useState } from 'react'
import './App.css'
import AllFilms from './components/AllFilms'
import ReactPaginate from 'react-paginate'
import { SearchIcon } from '@heroicons/react/solid'
import Carousel from './components/Carousel'
import { getPopularMovies, getTopRatedMovies } from './services/movies'

function App () {
  const [popularMovieList, setPopularMovieList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [topRatedMovieList, setTopRatedMovieList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData (page) {
      const GetPopularMovies = await getPopularMovies(page)
      setPopularMovieList(GetPopularMovies)
      setMovieList(GetPopularMovies)
    }
    fetchData(page)
  }, [page])

  useEffect(() => {
    async function fetchData () {
      const GetTopRatedMovies = await getTopRatedMovies()
      setTopRatedMovieList(GetTopRatedMovies)
    }
    fetchData()
  }, [])

  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  const handleChange = (event) => {
    if (event.target.value === 'all') {
      setPopularMovieList(movieList)
    } else {
      const filter = movieList.filter(obj => {
        return obj.genre_ids.includes(parseInt(event.target.value))
      })
      setPopularMovieList(filter)
    }
  }

  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
              <div className="flex justify-between mt-10 mb-10">
                  <img src="logo.svg" alt="App logo" />

                  <div className="max-w-lg w-full lg:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                          Rechercher un film
                      </label>
                      <div className="relative text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                              <SearchIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                              id="search"
                              className="block w-full bg-[#253653] py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                              placeholder="Rechercher un film"
                              type="search"
                              name="search"
                          />
                      </div>
                  </div>
              </div>
          </div>

          <div>
              <h1 className="mb-10">Les 10 meilleurs films</h1>
              <Carousel topRatedMovieList={topRatedMovieList}/>
          </div>

          <hr className="solid opacity-20 mb-20"></hr>

          <div>
              <h1 className="mb-10">Tous les films</h1>

              <div className="mb-5">
                  <label htmlFor="location" className="text-sm font-medium text-white">
                      Filtrer par :
                  </label>

                  <select
                      onChange={handleChange}
                      id="genre"
                      name="genre"
                      className="ml-2 mt-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue=""
                  >
                      <option value="">Genre</option>
                      <option value="all">Tous</option>
                      <option value="28">Action</option>
                      <option value="27">Horreur</option>
                      <option value="10749">Amour</option>
                  </select>
              </div>

              <AllFilms films={popularMovieList}></AllFilms>
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center mt-5 mb-10">
                  <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={11}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                      breakLinkClassName={'bg-[#0D1D38] border-[#253755] rounded-lg text-[#586E94] hover:bg-[#253755] ml-2 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium'}
                      containerClassName={'relative z-0 inline-flex rounded-md shadow-sm -space-x-px'}
                      pageLinkClassName={'bg-[#0D1D38] border-[#253755] rounded-lg text-[#586E94] hover:bg-[#253755] ml-2 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium'}
                      previousLinkClassName={'bg-[#0D1D38] border-[#253755] rounded-lg text-[#586E94] hover:bg-[#253755] ml-2 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium'}
                      nextLinkClassName={'bg-[#0D1D38] border-[#253755] rounded-lg text-[#586E94] hover:bg-[#253755] ml-2 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium'}
                      activeLinkClassName={'bg-[#253755]'}
                  />
              </div>
          </div>

      </div>
  )
}

export default App
