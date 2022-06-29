import axios from 'axios'

export async function getPopularMovies (page) {
  let result
  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=${page}`)
    .then(response => {
      result = response.data.results
    }, error => {
      console.log(error)
    })
  return result
}

export async function getTopRatedMovies () {
  let result
  await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=1')
    .then(response => {
      result = response.data.results
    }, error => {
      console.log(error)
    })
  return result
}
