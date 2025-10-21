
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
            <div className='w-full h-150 bg-amber-400'>
                <img src="https://i.ibb.co.com/q3KhzNy9/hakim-menikh-J4-ATe7a-P03-Y-unsplash.jpg" className='w-full object-center object-cover' alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide><div className='w-full h-150 bg-blue-200'></div></SwiperSlide>
        <SwiperSlide><div className='w-full h-150 bg-green-200'></div></SwiperSlide>
        <SwiperSlide><div className='w-full h-150 bg-red-300'></div></SwiperSlide>
        <SwiperSlide><div className='w-full h-150 bg-orange-600'></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
