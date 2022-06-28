import React from 'react'
import FilmCard from './FilmCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import * as PropTypes from 'prop-types'

Carousel.propTypes = { topRatedMovieList: PropTypes.arrayOf(PropTypes.any) }

function Carousel (props) {
  const { topRatedMovieList } = props

  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-10"
    >
        {topRatedMovieList.map((film) =>
            <SwiperSlide key={film.id} className="flex justify-center">
                <FilmCard film={film} key={film.id} />
            </SwiperSlide>
        )}
    </Swiper>
  )
}

export default Carousel
