'use client'

import React from 'react';
import { Navbar } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  
  /**
   * 
   * @param {string} path 
   * @returns {boolean}
   */
  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <Navbar className="border-b shadow-sm bg-white mb-6">
      <div className="container mx-auto px-4">
        
        <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700">
          Meme Library
        </Link>
        
        <div className="flex-grow"></div>
        
        <div className="flex items-center space-x-4">

          <Link 
            href="/table" 
            className={`px-3 py-2 rounded-md ${
              isActive('/table') 
              ? 'bg-primary-50 text-primary-700 font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Table
          </Link>
          
          <Link 
            href="/list" 
            className={`px-3 py-2 rounded-md ${
              isActive('/list') 
              ? 'bg-primary-50 text-primary-700 font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            List
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;