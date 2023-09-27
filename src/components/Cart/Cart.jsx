import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';

const Cart = ({ open, setOpen }) => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const carts = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className='w-full fixed z-[1] top-0 left-0 right-0 bottom-0 transition-all duration-100 bg-black bg-opacity-90 z-100'>
      <div className='flex overflow-auto max-h-[500px] flex-col s mt-[15%] sm:mt-[5%] bg-white  rounded-xl max-w-[350px] sm:max-w-[600px] mx-auto'>
        <div className='flex sticky top-0 bg-white items-center justify-between px-3 py-2'>
          <p className='text-2xl font-semibold logo'>Cart </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='4'
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
        <div>
          {carts.length > 0 ? (
            <div>
              {carts.map((cart, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center my-3 pb-3 last:mb-0 border-b border-black last:border-none px-3'
                >
                  <div className='flex gap-3 items-center w-full'>
                    <img
                      src={cart.img}
                      alt={cart.name}
                      className='w-[90px] rounded-md border border-gray-300'
                    />
                    <div className='flex justify-between w-full logo'>
                      <div>
                        <p className='logo text-md font-semibold'>
                          {cart.name}
                        </p>
                        <div className='text-gray-800'>
                          <p className='flex items-center'>
                            color:
                            <span
                              className='rounded-full h-1 p-2 ml-2'
                              style={{ backgroundColor: cart.color }}
                            ></span>
                          </p>
                          <p>
                            size:{' '}
                            <span className='text-black'>{cart.size}</span>
                          </p>
                          <p>
                            qty:{' '}
                            <span className='text-black'>{cart.amount}</span>
                          </p>
                          <p>
                            price:{' '}
                            <span className='text-black'>{cart.price}</span> $
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className='logo p-1 bg-red-600 hover:bg-red-700 transition-all text-white rounded-md duration-200'
                        onClick={() => {
                          dispatch(removeFromCart(cart));
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='logo p-3 text-gray-800'>
              <p>No items in cart</p>
            </div>
          )}
        </div>
        {carts.length > 0 && (
          <div
            className={
              'flex sticky bottom-0 bg-white justify-between px-3 py-2 logo'
            }
          >
            <p>
              total items:{' '}
              <span className='logo text-lg font-semibold '>{totalAmount}</span>
            </p>
            <p>
              total price:{' '}
              <span className='logo text-lg font-semibold '>
                {totalPrice} $
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
