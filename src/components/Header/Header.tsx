// components/Navbar.tsx
import React from 'react';
import { 
   
  ShoppingCartIcon, 
  UserCircleIcon, 
  Bars3Icon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';

import Link from 'next/link';
import Logo from '../../../public/assets/header/logo.png'
const Navbar: React.FC = () => {
 return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="flex justify-between items-center  xl:px-12">
        <Link href="/" className="text-xl font-bold font-heading">
        <Image 
    src={Logo} 
    alt="Company Logo" 
    width={250} 
    height={150} 
  />        </Link>
        
        {/* Nav Links */}
        <ul className="hidden md:flex space-x-12 font-semibold font-heading">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link href="/service" className="hover:text-gray-200">Service</Link></li>
          <li><Link href="/contect" className="hover:text-gray-200">Contact Us</Link></li>
        </ul>
        
        {/* Header Icons */}
        <div className="hidden xl:flex items-center space-x-5">
          <Link href="#" className="flex items-center hover:text-gray-200">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
          <Link href="/profile" className="hover:text-gray-200">
            <UserCircleIcon className="h-6 w-6" />
          </Link>
        </div>
        
        {/* Responsive navbar */}
        <div className="xl:hidden flex items-center">
          <Link href="#" className="mr-4">
            <ShoppingCartIcon className="h-6 w-6 hover:text-gray-200" />
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
          <Link href="#" className="navbar-burger">
            <Bars3Icon className="h-6 w-6 hover:text-gray-200" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;