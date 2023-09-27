import { useState } from 'react';
import { login } from '../../features/slices/authSlice';
import { useDispatch } from 'react-redux';
import jacket1 from '../../assets/images/jeans7.jpg';

const Login = () => {
  const initialState = {
    name: '',
    password: '',
  };

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <img
        src={jacket1}
        alt='jacket'
        className='absolute z-[-1] top-0 left-0 h-screen object-cover w-full'
      />
      <div
        className='logo flex mx-auto overflow-auto  flex-col bg-white  rounded-xl
        max-w-[300px] mt-[80px] border m-6 border-gray-300 '
      >
        <div className='h-[100px] rounded-xl flex justify-center items-center bg-black text-2xl text-white m-3 '>
          <p>Sign In</p>
        </div>
        <div className='flex flex-col gap-3 m-3'>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder='Name'
            className='border border-gray-300 w-full mx-auto p-2 rounded-lg outline-none'
          />
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={onChange}
            placeholder='Password'
            className='border border-gray-300 w-full mx-auto p-2 rounded-lg outline-none'
          />
          <div className='flex items-center gap-2'>
            <input type='checkbox' checked='true' />{' '}
            <p className='text-gray-400 text-sm'>Remember Me</p>
          </div>
          <button
            onClick={() => {
              dispatch(login(values));
            }}
            className='h-[40px] rounded-lg flex justify-center items-center bg-black text-sm text-white'
          >
            SIGN IN
          </button>
          <p className='text-center text-sm text-gray-400'>
            Don`t have account? <span className='text-black'>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
