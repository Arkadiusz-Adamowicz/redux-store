import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../Navbar/Navbar';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
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
import Error from '../Error/Error';

const FilteredProducts = () => {
  const error = useSelector(state => state.products.error);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const { type } = useParams();
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
      </div>
      <div className='logo flex sm:gap-6 gap-1 p-2 w-full bg-black items-center sm:justify-around justify-center '>
        <div className='flex items-center justify-between gap-1 sm:gap-6'>
          <Menu>
            <MenuHandler>
              <button className='hover:bg-white text-white hover:text-black p-1 rounded uppercase text-md'>
                Gender
              </button>
            </MenuHandler>
            <MenuList className='bg-black border-none rounded-t-none rounded-b-xl'>
              {genders.map((item, index) => (
                <MenuItem
                  key={index}
                  className={`logo p-2 text-white hover:bg-white hover:text-black text-left`}
                  onClick={() => dispatch(filterByGender(item))}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <button
              className='hover:bg-white text-white hover:text-black p-1 rounded uppercase text-md'
              onClick={() => dispatch(sortByPrice())}
            >
              Price
            </button>
          </Menu>

          <Menu>
            <MenuHandler>
              <button className='hover:bg-white text-white hover:text-black p-1 rounded uppercase text-md'>
                Color
              </button>
            </MenuHandler>
            <MenuList className='bg-black border-none rounded-t-none rounded-b-xl'>
              {colors.map((item, index) => (
                <MenuItem
                  key={index}
                  className={`logo p-2 text-white hover:bg-white hover:text-black text-left`}
                  onClick={() => dispatch(filterByColor(item))}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {type !== 'Bags' && (
            <Menu>
              <MenuHandler>
                <button className='hover:bg-white text-white hover:text-black p-1 rounded uppercase text-md'>
                  Size
                </button>
              </MenuHandler>
              {type !== 'Shoes' ? (
                <MenuList className='bg-black border-none rounded-t-none rounded-b-xl'>
                  {sizes.map((item, index) => (
                    <MenuItem
                      key={index}
                      className={`logo p-2 text-white hover:bg-white hover:text-black text-left`}
                      onClick={() => dispatch(filterBySize(item))}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              ) : (
                <MenuList className='bg-black border-none rounded-t-none rounded-b-xl'>
                  {sizes2.map((item, index) => (
                    <MenuItem
                      key={index}
                      className={`logo p-2 text-white hover:bg-white hover:text-black text-left`}
                      onClick={() => dispatch(filterBySize(item))}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              )}
            </Menu>
          )}
        </div>
        <div onClick={() => dispatch(filterProducts(type))}>
          <p className='hover:bg-white text-white hover:text-black p-1 rounded uppercase text-md cursor-pointer'>
            CLEAR
          </p>
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
