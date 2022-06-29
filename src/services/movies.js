import axios from 'axios'

export async function getPopularMovies (page) {
  return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=${page}`)
    .then(response => {
      return response.data.results
    }, error => {
      console.log(error)
    })
}

export async function getTopRatedMovies () {
  return await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=1')
    .then(response => {
      return response.data.results
    }, error => {
      console.log(error)
    })
}
