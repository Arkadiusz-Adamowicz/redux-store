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
    <div className='flex flex-col'>
      <div
        className='logo flex overflow-x-auto gap-4 p-3 bg-black items-center justify-center  font-inter top-[50px]
       sm:gap-6 
      '
      >
        {types.map((type, index) => {
          return (
            <div key={index}>
              <Link
                to={`/filteredProducts/${type}`}
                className={
                  isSelect === index
                    ? 'bg-white text-black p-1.5 rounded'
                    : 'bg-black text-white p-1.5 hover:bg-white hover:text-black  hover:rounded'
                }
                onClick={() => {
                  handleClick(index);
                  dispatch(filterProducts(type));
                }}
              >
                {type.toUpperCase()}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateButtons;
