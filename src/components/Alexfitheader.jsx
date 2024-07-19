import React from 'react';


export default function Alexfitheader() {
  return (
    <header className='bg-slate-800 text-white py-4 px-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>
         
        </div>

        <nav className='flex gap-6'>
     
        </nav>

        <div className='relative'>
          <input 
            type='text' 
            placeholder='Search...' 
            className='py-2 px-4 rounded-full text-black'
          />
          <button className='absolute right-0 top-0 mt-2 mr-4'>
            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z'></path>
            </svg>
          </button>

        </div>
    
      </div>
    </header>
  );
}
