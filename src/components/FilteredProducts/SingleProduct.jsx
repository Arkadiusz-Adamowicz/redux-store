import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../../features/slices/cartSlice';
import Navbar from '../Navbar/Navbar';

const SingleProduct = () => {
  const product = useSelector(state => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : '';
  const productColor = product[0].color ? product[0].color[0] : '';
  const { id } = useParams();
  const dispatch = useDispatch();
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <>
      <div className='bg-white w-full sticky top-0'>
        <Navbar />
      </div>
      <div className='max-w-[850px] mx-auto p-8 logo'>
        {product
          .filter(product => product.id === id)
          .map((item, index) => (
            <div key={index} className='sm:flex block gap-6'>
              <img
                src={item.img}
                className='shadow-md shadow-gray-300 rounded-xl h-[500px] border border-gray-300'
                alt={item.name}
              />

              <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                  <div className='sm:flex justify-between'>
                    <div>
                      <p className='text-2xl font-inter font-semibold logo mt-3 sm:mt-0'>
                        {item.name}
                      </p>
                      <p className='text-orange-500 text-lg font-semibold rounded logo pb-4'>
                        20% OFF
                      </p>
                    </div>
                    <div>
                      <p className='pb-4 logo font-semibold font-inter break-normal'>
                        <span className='text-2xl '>{item.price} $</span>
                      </p>
                    </div>
                  </div>

                  <p className='pb-4 logo font-inter break-normal text-gray-600'>
                    {item.text}
                  </p>
                  <div>
                    <div className='flex flex-col gap-3'>
                      <div>
                        <label
                          htmlFor='color'
                          className='block text-sm font-medium mb-1'
                        >
                          Pick a color:
                        </label>
                        <select
                          className='bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5 outline-none'
                          id='color'
                          name='color'
                          value={color}
                          onChange={e => setColor(e.target.value)}
                        >
                          {item.color.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                      {item.size ? (
                        <div>
                          <label
                            htmlFor='size'
                            className='block text-sm font-medium text-gray-900 mb-1'
                          >
                            Pick a size:
                          </label>
                          <select
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-none'
                            id='size'
                            name='size'
                            value={size}
                            onChange={e => setSize(e.target.value)}
                          >
                            {item.size.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className='flex justify-end
                 w-full'
                >
                  <button
                    className='border bg-black text-white rounded-lg px-4 py-2 mt-5 transition-all duration-200 logo w-full sm:w-fit'
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          size: size,
                          color: color,
                          amount: 1,
                          img: item.img,
                          totalPrice: item.price,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SingleProduct;
