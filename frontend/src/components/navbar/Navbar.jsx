import { useState, useEffect } from 'react';
import Logo from './Logo';
import PrimaryNavigation from './PrimaryNavigation';
import UserMenu from './UserMenu';
import SearchBar from './Searchbar';
import SecondarySearchBar from './SecondarySearchBar';
import Categories from '../categories/Categories';

const Navbar = () => {
  const [guestsDropdown, setGuestsDropdown] = useState(false);

  const toggleGuestsDropdown = () => {
    setGuestsDropdown((prev) => !prev);
  };

  useEffect(() => {
    const element = document.querySelector('.main-header');
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 3) {
        element?.classList.add('show-item');
      } else {
        element?.classList.remove('show-item');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main-header pl-20 pr-20 border-solid border-b-[1px] pb-6'>
      <div className='flex items-center justify-between h-20'>
        <Logo />
        <PrimaryNavigation />
        <UserMenu />
      </div>
      <div className='flex justify-center w-full primary-header'>
        <SearchBar />
      </div>
      <SecondarySearchBar
        toggleGuestsDropdown={toggleGuestsDropdown}
        guestsDropdown={guestsDropdown}
      />
      <Categories />
    </div>
  );
};

export default Navbar;
