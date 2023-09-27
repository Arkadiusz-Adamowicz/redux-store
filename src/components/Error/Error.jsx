const Error = () => {
  return (
    <div className='flex max-w-[300px] sm:max-w-[400px] text-center  items-center justify-center mx-auto mt-[10%]'>
      <p className='logo text-xl bg-red-600 text-white p-5 rounded-xl'>
        No product matched.
        <br />
        Clear filters and try again
      </p>
    </div>
  );
};

export default Error;
