import React from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { useSelector } from 'react-redux';
const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <main className='h-screen'>
      <SmallSidebar />
      <div className='grid grid-cols-5 '>
        <BigSidebar />
        <div
          className={` col-span-5  ${
            isSidebarOpen ? 'lg:col-span-5' : 'lg:col-span-4'
          }`}
        >
          <div className='px-4 sm:px-8 py-4'>
            <Navbar />
          </div>
          <div className='px-2 sm:px-4 lg:px-10 py-2 sm:py-4 lg:py-6 bg-bgLight min-h-screen'>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
