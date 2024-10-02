// import { FaSearch } from 'react-icons/fa';
// import GuestsDropdown from './GuestsDropdown';

// const SecondarySearchBar = ({ toggleGuestsDropdown, guestsDropdown }) => {
//   return (
//     <div className='flex justify-center secondary-header'>
//       <div className='flex justify-between items-center rounded-full border-solid border-[1px] border-gray-300 w-fit pb-3 pl-6 pt-3 shadow-sm'>
//         <div className='flex-grow px-4 font-medium text-center border-r border-gray-300'>
//           Anywhere
//         </div>
//         <div className='flex-grow px-4 font-medium text-center border-r border-gray-300'>
//           Any week
//         </div>
//         <div
//           className='flex-grow px-4 font-light text-center cursor-pointer'
//           onClick={toggleGuestsDropdown}
//         >
//           Add guests
//         </div>
//         {guestsDropdown && (
//           <div className='absolute z-50 w-full p-4 left-24 top-12'>
//             <GuestsDropdown />
//           </div>
//         )}
//         <div className='flex items-center justify-center w-8 h-8 mr-3 text-white bg-[#FF385C] rounded-full aspect-square'>
//           <FaSearch />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondarySearchBar;

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import GuestsDropdown from './GuestsDropdown';

const SecondarySearchBar = () => {
  const [guestsDropdown, setGuestsDropdown] = useState(false);

  const toggleGuestsDropdown = () => {
    setGuestsDropdown((prev) => !prev);
  };

  return (
    <div className='flex justify-center secondary-header'>
      <div className='flex justify-between items-center rounded-full border-solid border-[1px] border-gray-300 w-fit pb-3 pl-6 pt-3 shadow-sm'>
        <div className='flex-grow px-4 font-medium text-center border-r border-gray-300'>
          Anywhere
        </div>
        <div className='flex-grow px-4 font-medium text-center border-r border-gray-300'>
          Any week
        </div>
        <div
          className='flex-grow px-4 font-light text-center cursor-pointer'
          onClick={toggleGuestsDropdown}
        >
          Add guests
        </div>
        <div className='flex items-center justify-center w-8 h-8 mr-3 text-white bg-[#FF385C] rounded-full aspect-square'>
          <FaSearch />
        </div>

        {/* GuestsDropdown */}
        {guestsDropdown && (
          <div className='absolute z-50 w-full p-4 left-24 top-12'>
            <GuestsDropdown />
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondarySearchBar;
