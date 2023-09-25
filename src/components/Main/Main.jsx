import Slider from '../Slider/Slider';
import Products from '../Products/Products';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <div className='bg-white w-full sticky top-0 z-10'>
        <Navbar />
        <NavigateButtons />
      </div>
      <Slider />
      <Products />
      <Footer />
    </>
  );
};

export default Main;
