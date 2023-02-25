import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-center p-2 bg-rose-200'>
      <NavLink to="/" className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0' } >Home</NavLink>
      <NavLink to="/about" className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0' }>About</NavLink>
      <NavLink to="/contact-us" className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0' }>Contact Us</NavLink>
      <NavLink to="/posts" className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0' }>Posts</NavLink>
    
    </nav>
  );
};

export default Navbar;
