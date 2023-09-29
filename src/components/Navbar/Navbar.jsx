import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';
import { logout } from '../../features/slices/authSlice';

const Navbar = () => {
  const total = useSelector(state => state.cart.totalAmount);
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  return (
    <>
      <div className='logo  bg-black w-full text-center text-white p-1'>
        <p className='text-md'>
          Welcome{' '}
          <span>
            {user.name.charAt('0').toUpperCase() + user.name.slice(1)}!
          </span>
        </p>
      </div>
      <div
        className='flex justify-between mx-2 mr-5 bg-opacity-60
      '
      >
        <Link to='/'>
          <p className='title font-bold text-2xl sm:text-4xl  tracking-normal leading-none text-center p-2'>
            store4you
          </p>
        </Link>

        <div className='flex flex-row items-center gap-4 sm:gap-2 mr-2 '>
          <div className='flex flex-row items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#000'
              className='w-7 sm:w-6 h-7 sm:h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
            <p className='font-inter text-base logo tracking-normal leading-none text-center mr-2 pl-1 hidden sm:block'>
              My List
            </p>
          </div>

          <div
            to='/'
            className='flex flex-row items-center cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            {total > 0 && (
              <span className='flex items-center justify-center h-3.5 w-3.5 rounded-full bg-red-600 absolute logo text-white text-[10px] sm:top-[58px] top-[52px]'>
                {total}
              </span>
            )}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#000'
              className='w-7 sm:w-6 h-7 sm:h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>

            <p className='font-inter text-base logo tracking-normal leading-none text-center mr-2 pl-1 hidden sm:block'>
              Cart
            </p>
          </div>

          <div
            className='flex flex-row items-center cursor-pointer'
            onClick={() => {
              dispatch(logout(user));
              setIsLogin(is => !is);
              navigate('/');
            }}
          >
            <div className='flex flex-row items-center cursor-pointer'>
              {isLogin ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#000'
                  className='w-7 sm:w-6 h-7 sm:h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='#000'
                  className='w-7 sm:w-6 h-7 sm:h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                  />
                </svg>
              )}
            </div>
            <p className='font-inter text-base logo tracking-normal leading-none text-left w-[50px] pl-1 hidden sm:block'>
              {isLogin ? 'Login' : 'Logout'}
            </p>
          </div>
          {open && <Cart open={open} setOpen={setOpen} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
