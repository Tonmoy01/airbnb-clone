// import { FaSearch } from 'react-icons/fa';

// const Searchbar = () => {
//   return (
//     <div className='flex justify-between items-center rounded-full border-solid border-[1px] w-fit min-w-[60%] pb-2 pl-6 pt-2 shadow-md'>
//       <form>
//         <div className='flex flex-col'>
//           <label htmlFor='Where' className='font-medium'>
//             Where
//           </label>
//           <input
//             className='outline-none'
//             type='text'
//             placeholder='Search destinations'
//           />
//         </div>
//       </form>
//       <div>
//         <div className='font-medium'>Check in</div>
//         <div>Add dates</div>
//       </div>
//       <div>
//         <div className='font-medium'>Check out</div>
//         <div>Add dates</div>
//       </div>
//       <div>
//         <div className='font-medium'>Who</div>
//         <div>Add guests</div>
//       </div>
//       <div className='flex items-center justify-center w-12 h-12 mr-3 text-white bg-[#FF385C] rounded-full'>
//         <FaSearch />
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import GuestsDropdown from './GuestsDropdown';

const Searchbar = () => {
  const [guestsDropdown, setGuestsDropdown] = useState(false);

  const toggleGuestsDropdown = () => {
    setGuestsDropdown((prev) => !prev);
  };

  return (
    <div className='flex justify-center w-full primary-header'>
      <div className='flex justify-between items-center rounded-full border-solid border-[1px] w-fit min-w-[60%] pb-2 pl-6 pt-2 shadow-md relative'>
        <form>
          <div className='flex flex-col'>
            <label htmlFor='Where' className='font-medium'>
              Where
            </label>
            <input
              className='outline-none'
              type='text'
              placeholder='Search destinations'
            />
          </div>
        </form>
        <div>
          <div className='font-medium'>Check in</div>
          <div>Add dates</div>
        </div>
        <div>
          <div className='font-medium'>Check out</div>
          <div>Add dates</div>
        </div>
        <div
          className='relative flex-grow px-4 font-light text-center cursor-pointer'
          onClick={toggleGuestsDropdown}
        >
          <div className='font-medium'>Who</div>
          <div>Add guests</div>

          {/* GuestsDropdown */}
          {guestsDropdown && (
            <div className='absolute left-0 z-50 w-full p-4 top-12'>
              <GuestsDropdown />
            </div>
          )}
        </div>
        <div className='flex items-center justify-center w-12 h-12 mr-3 text-white bg-[#FF385C] rounded-full'>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
