import { filterProducts } from '../../features/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavigateButtons = () => {
  const [isSelect, setIsSelect] = useState(0);
  const handleClick = id => {
    setIsSelect(id);
  };
  const types = [
    'Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T.Shirts',
    'Jeans',
    'Jackets',
    'Bags',
  ];

  const dispatch = useDispatch();

  return (
    <div className='logo flex p-2 w-full bg-black items-center justify-around'>
      <div className='flex overflow-x-auto items-center gap-3 md:gap-6  p-1 '>
        {types.map((type, index) => {
          return (
            <div key={index}>
              <Link
                to={`/filteredProducts/${type}`}
                className={
                  isSelect === index
                    ? 'bg-white text-black p-1.5 rounded'
                    : 'bg-black text-white hover:rounded hover:bg-white hover:text-black p-1.5'
                }
                onClick={() => {
                  handleClick(index);
                  dispatch(filterProducts(type));
                }}
              >
                {type}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateButtons;
