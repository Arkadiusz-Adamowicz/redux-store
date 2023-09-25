import {sliderData} from '../../assets/data/data'
import {useState} from 'react'
import { Carousel } from '@material-tailwind/react';

const Slider = () => {
  return (
    <>
      <div className='absolute z-[0] w-full'>
        <Carousel transition={{ duration: 1 }} className='mx-auto h-[600px]'>
          {sliderData.map(item => <img key={item.id}  src={item.img} className='h-full w-full object-cover'/>)}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
