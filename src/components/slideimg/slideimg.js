'use client';
import './slideimg.css';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lusitana } from 'next/font/google';
const lusitana = Lusitana({
  weight:['400'],
  subsets:['latin']
})

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Images = [
  {
    id: "1",
    src: "/slideimg/img1.jpg",
    alt: "",
  },
  {
    id: "2",
    src: "/slideimg/img2.jpg",
    alt: "",
  },
  {
    id: "3",
    src: "/slideimg/img3.jpg",
    alt: "",
  },
  {
    id: "4",
    src: "/slideimg/img4.jpg",
    alt: "",
  },
]

export default function Slideimg() {
  return (
    <div className="block-block h-[80vh] w-full flex justify-around pl-[100px] pr-[100px] bg-gradient-to-b from-neutral-900 from-80% to-blue-800">
      {/* ทำรูปสลัดดดดดด */}
      <div className="h-full w-[30rem] flex p-10">
        <Swiper
          // install Swiper modules
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          loop={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            {Images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className='flex h-full w-full item-center justify-center'>
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className='block h-full w-full object-cover rounded-[20px]' 
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        
      </div>

      {/* ทำข้อความมมมมมมมมมม */}
      <div className="w-[600px] content-center text-white p-2">
        {/* Add your text content here */}
        <h1 className={`text-[1.75rem] text-center ${lusitana.className}`}>Why are you just standing there with your mouth gaping? Ah, you must be stunned and at a loss for words... Understandable, it is I after all... Fontaine's most beloved star, Furina. I'm on a very tight schedule, so you're lucky to even get an appointment with me.</h1>
        <p className='text-right' style={{ textShadow: '0 0 3px white' }}>`Furina Sama`</p>
      </div>
    </div>
  );
}

// {todos: สร้าง json หรือ หาวิธีใช้ loop map แล้วสร้าง component SwiperSlide แค่ครั้งเดียว}
