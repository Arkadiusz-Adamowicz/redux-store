import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../features/slices/productsSlice';

const ProductCard = ({ product: { id, name, img, price, text, color } }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link
      to={`/filteredProducts/${type}/${id}`}
      className='border border-gray-300 p-2.5 rounded-xl max-w-[240px] shadow-md  shadow-gray-300'
      onClick={() => dispatch(singleProduct(id))}
    >
      <div className='h-[300px] w-full shadow-md rounded-xl shadow-gray-300'>
        <img
          src={img}
          alt='photo'
          className='w-full h-full object-cover rounded-xl '
        />
      </div>

      <p className='py-2 text-center text-md logo text-gray-800'>{name}</p>
      <p className='text-sm logo break-all text-gray-500 pb-2'>{text}</p>
      <hr />
      <div className='flex items-center justify-between text-xs text-gray-500 mt-2'>
      <span className='logo rounded text-black text-lg flex gap-1 items-center'>
          {price} <span className='text-gray-500 text-sm'>$</span>
        </span>
        <div value={color.name} className='outline-none flex'>
          {color.map((c, index) => (
            <p
              key={index}
              className='rounded-full p-2 ml-2'
              style={{ backgroundColor: c }}
            ></p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
