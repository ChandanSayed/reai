import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Slider1 from '/public/images/slider1.png';
import Camera from '/public/images/camera.png';
import Left from '/public/images/left.png';
import Right from '/public/images/right.png';
import { LuCamera } from 'react-icons/lu';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function ImageSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = () => {
    // Update the current slide number
    if (swiperInstance) {
      setCurrentSlide(swiperInstance.realIndex + 1);
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <>
      <div className="slider-container relative">
        <Swiper loop={true} slidesPerView={1} onSwiper={swiper => setSwiperInstance(swiper)} onSlideChange={handleSlideChange} className="mySwiper">
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Slider1} alt="Slider" />
          </SwiperSlide>
        </Swiper>

        <div className="rounded-lg bg-black bg-opacity-50 absolute bottom-2 left-2 z-10 py-2 px-3 flex items-center text-white">
          {/* <Image src={Camera} alt="Camera" /> */}
          <LuCamera className="text-lg" />
          <p className="pl-3 text-sm sm:text-15 font-normal">
            {currentSlide}/{swiperInstance ? swiperInstance.slides.length : 0}
          </p>
        </div>

        <div className="w-9 h-9 bg-white rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={goPrev}>
          <Image className="mt-1.5 ml-1.5" src={Left} alt="Left" />
        </div>
        <div className="w-9 h-9 rounded-full bg-white absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" onClick={goNext}>
          <Image className="mt-1.5 ml-1.5" src={Right} alt="Right" />
        </div>
      </div>
    </>
  );
}
