import Link from 'next/link';

export default function Custom404() {
  const neonStyle = {
    color: '#fff',
    'text-shadow': `0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #ff9200,
      0 0 82px #ff9200,
      0 0 92px #ff7000,
      0 0 102px #ff7000,
      0 0 151px #ff7000`,
    'font-weight': 'bold',
    'text-align': 'center',
    'font-size': '10rem',
  };
  return (
    <div className='flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28'>
      <div className='w-full lg:w-1/2'>
        <h1 style={neonStyle}>404</h1>
      </div>
      <div className='w-full lg:w-1/2 '>
        <h1 className='py-4 text-3xl lg:text-4xl font-extrabold text-white'>
          We could not find what you are looking for
        </h1>
        <p className='py-4 text-base text-gray-100'>Either it was removed, or you mistyped the link.</p>
        <Link href='/' passHref>
          <button className='w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-orange-500 text-white font-bold hover:bg-orange-700 border-none'>
            Go back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
