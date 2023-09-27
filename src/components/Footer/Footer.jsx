const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='logo bg-black w-full flex items-center justify-center sm:justify-center p-2'>
      <p className='text-white text-sm'>
        Copyright {year} &copy; by Arek Adamowicz
      </p>
    </div>
  );
};

export default Footer;
