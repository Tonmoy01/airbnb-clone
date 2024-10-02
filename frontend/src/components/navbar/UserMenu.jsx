import { AiOutlineMenu } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import avatar from '../../assets/placeholder.svg';
import { useState } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className='relative'>
      <div className='flex items-center gap-4'>
        <div>Airbnb your home</div>
        <FiGlobe />
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='md:block'>
            <img
              src={avatar}
              alt='avatar'
              className='rounded-full'
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[250px] bg-white overflow-hidden right-0 top-12 text-sm z-50'>
          <div className='flex flex-col cursor-pointer'>
            <MenuItem onClick={() => {}} label='Sign up' />
            <MenuItem onClick={() => {}} label='Log in' />
            <div className='border-t-[1px]'>
              <MenuItem onClick={() => {}} label='Gift cards' />
              <MenuItem onClick={() => {}} label='Airbnb your home' />
              <MenuItem onClick={() => {}} label='Host an experience' />
              <MenuItem onClick={() => {}} label='Help Center' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
