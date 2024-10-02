import React, { useState } from 'react';

const GuestsDropdown = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const increase = (setter, value) => {
    setter(value + 1);
  };

  const decrease = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <div
      className='absolute z-50 p-8 mt-2 bg-white shadow-lg rounded-3xl'
      style={{ width: '430px' }}
    >
      {' '}
      <div className='flex items-center justify-between pb-4 mb-4 border-b'>
        {/* <div className='text-lg text-gray-700'>Adults</div>{' '}
        <span className='block'>Ages 13 or above</span> */}
        <div className='flex flex-col items-start space-y-1'>
          <div className='text-lg font-bold text-gray-700'>Adults</div>
          <span className='block text-sm text-gray-500'>Ages 13 or above</span>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => decrease(setAdults, adults)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] hover:border-gray-400 border-gray-300 rounded-full'
          >
            -
          </button>
          <span className='text-lg font-medium'>{adults}</span>{' '}
          <button
            onClick={() => increase(setAdults, adults)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            +
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between pb-4 mb-4 border-b'>
        <div className='flex flex-col items-start space-y-1'>
          <div className='text-lg font-bold text-gray-700'>Children</div>
          <span className='text-sm text-gray-500'>Ages 2 – 12</span>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => decrease(setChildren, children)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            -
          </button>
          <span className='text-lg font-medium'>{children}</span>
          <button
            onClick={() => increase(setChildren, children)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            +
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between pb-4 mb-4 border-b'>
        <div className='flex flex-col items-start space-y-1'>
          <div className='text-lg font-bold text-gray-700'>Infants</div>
          <span className='text-sm text-gray-500'>Under 2</span>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => decrease(setInfants, infants)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            -
          </button>
          <span className='text-lg font-medium'>{infants}</span>
          <button
            onClick={() => increase(setInfants, infants)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            +
          </button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start space-y-1'>
          <div className='text-lg font-bold text-gray-700'>Pets</div>
          <span className='text-sm text-gray-500'>
            Bringing a service animal?
          </span>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => decrease(setPets, pets)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            -
          </button>
          <span className='text-lg font-medium'>{pets}</span>
          <button
            onClick={() => increase(setPets, pets)}
            className='px-4 py-2 text-lg font-semibold bg-white border-[1px] border-gray-300 hover:border-gray-400 rounded-full'
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsDropdown;
