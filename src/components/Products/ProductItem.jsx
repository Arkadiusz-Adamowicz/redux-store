import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/cartSlice';

const ProductItem = ({ product }) => {
  const { id, price, size, img, totalPrice, name, text, color } = product;
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div className='border border-gray-300 p-2.5 rounded-xl max-w-[240px] shadow-md  shadow-gray-300'>
      <div className='h-[300px] shadow-md rounded-xl shadow-gray-300 relative'>
        <span className='bg-red-600 text-white logo text-sm absolute rounded-br-xl rounded-tl-xl flex p-[5px]'>
          SALE%
        </span>
        <img
          src={img}
          alt='photo'
          className='w-full h-full object-cover rounded-xl'
        />
      </div>

      <p className='py-2 text-center text-md logo text-gray-800'>{name}</p>
      <p className='text-sm logo break-all text-gray-500 pb-2'>{text}</p>
      <hr />

      <div className='flex items-center justify-between text-xs text-gray-500 mt-2'>
        <span className='logo rounded text-gray-500 text-sm'>
          Size: {defaultSize}
        </span>

        <span className='logo rounded text-gray-500 text-sm flex gap-1 items-center'>
          Color:
          <span
            className='rounded-full p-2 w-1 h-1'
            style={{ backgroundColor: defaultColor }}
          />
        </span>

        <span className='logo rounded text-black text-lg flex gap-1 items-center'>
          {price} <span className='text-gray-500 text-sm'>$</span>
        </span>
      </div>

      <button
        className='flex justify-center items-center mx-auto text-white bg-black py-2 px-5 mt-3 rounded-lg text-sm logo transition-all duration-200'
        onClick={() =>
          dispatch(
            addToCart({
              id: id,
              img: img,
              text: text,
              amount: 1,
              price: price,
              totalPrice: totalPrice,
              name: name,
              size: defaultSize,
              color: defaultColor,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
