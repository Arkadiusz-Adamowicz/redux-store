import { sliderData } from '../../assets/data/data';
import { useSelector, useDispatch } from 'react-redux';

import {
  nextSlide,
  prevSlide,
  dotSlide,
} from '../../features/slices/sliderSlice';

const Slider = () => {
  const slideIndex = useSelector(state => state.slider.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className='absolute z-[0] w-full'>
        <div>
          {sliderData.map(item => {
            return (
              <div
                key={item.id}
                className={
                  parseInt(item.id) === slideIndex
                    ? 'duration-200 ease-in-out'
                    : 'duration-200 ease-in-out'
                }
              >
                <div>
                  {parseInt(item.id) === slideIndex && (
                    <img
                      src={item.img}
                      alt='image'
                      className='h-[600px] w-full object-cover'
                    />
                  )}
                </div>
                <div className='absolute top-[40%] mx-auto inset-x-1/4'>
                  <p className='logo text-white text-2xl sm:text-4xl font-inter tracking-normal leading-none text-center'>
                    {parseInt(item.id) === slideIndex && item.text}
                  </p>
                </div>
                <div className='hidden sm:flex absolute cursor-pointer bottom-10 left-[45%] right-[45%] gap-3'>
                  {sliderData.map((dot, index) => (
                    <div
                      key={dot.id}
                      onClick={() => dispatch(dotSlide(index))}
                      className={
                        index === slideIndex
                          ? 'bg-black border border-white p-2 rounded-full cursor-pointer'
                          : 'bg-white p-2 rounded-full cursor-pointer'
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button
            className='absolute z-[2] top-[40%] left-10 bg-white rounded-full p-2'
            onClick={() => dispatch(prevSlide(slideIndex - 1))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#000'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            className='absolute z-[20px] top-[40%] right-10 bg-white rounded-full p-2'
            onClick={() => dispatch(nextSlide(slideIndex + 1))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#000'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
