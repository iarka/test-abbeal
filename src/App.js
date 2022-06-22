import './App.css';
import {useEffect, useState} from "react";
import AllFilms from "./components/AllFilms";
import ReactPaginate from "react-paginate";

function App() {
    const [popularMovieList, setPopularMovieList] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f3fb983d1a3524887a8a8717a10b439b&language=fr-FR&page=${page}`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => {
                setPopularMovieList(data.results)
                setPageCount(data.total_pages)
            })
    },[page])

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
    };

  return (
      <div className="bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AllFilms films={popularMovieList}></AllFilms>
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center mt-5">
                  <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
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

    /*<div className="App">
      <header className="App-header">

      </header>
    </div>*/
  );
}

export default App;
