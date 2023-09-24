import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from '@material-tailwind/react';
import shirt1 from '../../assets/images/shoe1.jpg';
import shoe1 from '../../assets/images/t-shirt1.jpg';
import hoodie1 from '../../assets/images/hoodie2.jpg';
import dress1 from '../../assets/images/dress3.jpg';

const Slider = () => {
  return (
    <>
      <div className='absolute z-[0] w-full'>
        <Carousel transition={{ duration: 1 }} className='mx-auto h-[600px]'>
          <img
            src={shirt1}
            alt='image 1'
            className='h-full w-full object-cover'
          />
          <img
            src={shoe1}
            alt='image 2'
            className='h-full w-full object-cover'
          />
          <img
            src={hoodie1}
            alt='image 3'
            className='h-full w-full object-cover'
          />
          <img
            src={dress1}
            alt='image 3'
            className='h-full w-full object-cover'
          />
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
