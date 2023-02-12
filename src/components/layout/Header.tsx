import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/#features', label: 'Features' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky  top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg'>
      <div className='layout flex items-center justify-between py-5'>
        <Link href='/'>
          <Image src='/svg/Logo.svg' width={161} height={42} alt='logo' />
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  className='cursor-pointer font-normal transition-colors hover:opacity-60'
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          <Link
            href='/login'
            className='text-base font-normal hover:opacity-60'
          >
            Log In
          </Link>
          <Link
            href='/signup'
            className='rounded-full bg-primary px-6 py-3 text-base font-normal text-white transition-colors hover:bg-opacity-90'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
