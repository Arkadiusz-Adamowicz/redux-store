import { storeData } from '../../assets/data/data';
import ProductItem from './ProductItem';
const Products = () => {
  return (
    <div>
      <div className='mt-[600px]'>
        <h2 className='text-white text-center text-lg logo bg-black p-2 w-full mx-auto mb-4'>
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className='flex flex-wrap gap-4 items-center justify-center m-4 max-w-[1200px] mx-auto'>
        {storeData
          .filter(product => product.type === 'T.Shirts')
          .map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
