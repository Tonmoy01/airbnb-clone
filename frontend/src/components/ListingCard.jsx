import React from 'react';
import { IoMdStar } from 'react-icons/io';
import HeartButton from '../components/HeartButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ListingCard = ({ list }) => {
  return (
    <div className='col-span-1 cursor-pointer'>
      <div className='flex flex-col w-full gap-2'>
        <div className='relative w-full overflow-hidden rounded-xl'>
          <Swiper spaceBetween={10} slidesPerView={1}>
            {list?.imageUrls?.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt=''
                  className='object-cover w-full transition h-72'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='absolute top-3 right-3'>
            <HeartButton />
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <div className='text-base font-semibold'>{list?.location}</div>
            <div className='flex items-center text-base font-semibold'>
              <IoMdStar /> {list?.rating}
            </div>
          </div>
          <div className='font-medium text-neutral-600'>
            Stay with {list?.host}
          </div>
          <div className='font-medium text-neutral-600'>{list?.date}</div>
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>${list?.price}</div>
          <div className='font-medium'>night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
