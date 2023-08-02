// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function Heropage() {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className=" h-[40rem] font-semibold flex justify-center items-center bg-red-200">
            <h1>Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[40rem] font-semibold flex justify-center items-center bg-blue-200">
            <h1>Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[40rem] font-semibold flex justify-center items-center bg-lime-200">
            <h1>Slide 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[40rem] font-semibold flex justify-center items-center bg-purple-200">
            <h1>Slide 4</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
