import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../Navbar/Navbar';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import Error from '../Error/Error';
import {
  filterProducts,
  filterByGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from '../../features/slices/productsSlice';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

const FilteredProducts = () => {
  const error = useSelector(state => state.products.error);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const { type } = useParams();
  const [isSelect, setIsSelect] = useState(0);
  const handleClick = id => {
    setIsSelect(id);
  };
  const colors = [
    'red',
    'green',
    'purple',
    'yellow',
    'orange',
    'blue',
    'brown',
    'black',
    'gray',
  ];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const sizes2 = ['36', '38', '40', '42', '44', '46'];
  const genders = ['male', 'female'];

  return (
    <>
      <div className='bg-white w-full sticky top-0'>
        <Navbar />
        <NavigateButtons />
        <div className='logo flex sm:gap-6 gap-1 p-1 w-full bg-black justify-center'>
          <div className='flex overflow-x-auto p-1 sm:gap-6 gap-2'>
            <Menu style={{ width: '10px' }}>
              <MenuHandler>
                <button className='hover:bg-white text-white hover:text-black p-1 rounded text-md'>
                  Gender
                </button>
              </MenuHandler>
              <MenuList className='min-w-fit bg-black border-none rounded-t-none rounded-b-xl flex flex-col gap-3'>
                {genders.map((item, index) => (
                  <MenuItem
                    key={index}
                    className={
                      isSelect === index
                        ? 'bg-white text-black p-1.5 rounded logo'
                        : 'bg-black text-white p-1.5 rounded logo mb-0'
                    }
                    onClick={() => {
                      handleClick(index);
                      dispatch(filterByGender(item));
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <button
                className='hover:bg-white text-white hover:text-black p-1 rounded text-md'
                onClick={() => dispatch(sortByPrice())}
              >
                Price
              </button>
            </Menu>
            <Menu>
              <MenuHandler>
                <button className='hover:bg-white text-white hover:text-black p-1 rounded text-md'>
                  Color
                </button>
              </MenuHandler>
              <MenuList className='min-w-fit bg-black border-none rounded-t-none rounded-b-xl flex flex-col gap-3'>
                {colors.map((item, index) => (
                  <MenuItem
                    key={index}
                    className={
                      isSelect === index
                        ? 'bg-white text-black p-1.5 rounded logo'
                        : 'bg-black text-white p-1.5 rounded logo mb-0'
                    }
                    onClick={() => {
                      handleClick(index);
                      dispatch(filterByColor(item));
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {type !== 'Bags' && (
              <Menu>
                <MenuHandler>
                  <button className='hover:bg-white text-white hover:text-black p-1 rounded text-md'>
                    Size
                  </button>
                </MenuHandler>
                {type !== 'Shoes' ? (
                  <MenuList className='min-w-fit bg-black border-none rounded-t-none rounded-b-xl flex flex-col gap-3'>
                    {sizes.map((item, index) => (
                      <MenuItem
                        key={index}
                        className={
                          isSelect === index
                            ? 'bg-white text-black p-1.5 rounded logo'
                            : 'bg-black text-white p-1.5 rounded logo mb-0'
                        }
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                ) : (
                  <MenuList className='min-w-fit bg-black border-none rounded-t-none rounded-b-xl'>
                    {sizes2.map((item, index) => (
                      <MenuItem
                        key={index}
                        className={`logo p-2 text-white hover:bg-white hover:text-black text-center`}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                )}
              </Menu>
            )}
            <div onClick={() => dispatch(filterProducts(type))}>
              <button className='hover:bg-white text-white hover:text-black p-1 rounded text-md cursor-pointer'>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      {error ? (
        <Error />
      ) : (
        <div className='flex flex-wrap gap-4 items-center justify-center m-4 max-w-[1200px] mx-auto '>
          {products
            .filter(product => product.type === type)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default FilteredProducts;
