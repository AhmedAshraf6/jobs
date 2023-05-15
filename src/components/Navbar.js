import React, { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { clearStore, toggleSidebar } from '../features/user/userSlice';
const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className='flex justify-between items-center transition-all duration-1000'>
      <FaAlignLeft
        onClick={toggle}
        className='text-primary cursor-pointer text-lg sm:text-2xl'
      />
      <div className='visible lg:hidden'>
        <div className='w-[80px] sm:w-[100px]'>
          <Logo />
        </div>
      </div>
      <h1 className='text-dark text-3xl font-bold hidden lg:block'>
        Dashboard
      </h1>
      <div className='relative'>
        <div
          className='flex items-center bg-primary hover:bg-primaryHover text-white transition duration-200 text-sm sm:text-lg rounded-md py-1 px-2 sm:px-3 gap-2 cursor-pointer'
          onClick={() => setClicked((prev) => !prev)}
        >
          <FaUserCircle />
          <h6>{user?.name}</h6>
          <FaCaretDown />
          {clicked && (
            <div
              className='absolute bg-[#dbeafe] rounded-md  top-12 w-full h-full left-0 text-primary flex items-center justify-center font-bold'
              onClick={() => {
                dispatch(clearStore('Logout Successful...'));
              }}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
