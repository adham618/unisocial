import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import useOnClickOutside from '@/hooks/use-onclick-outside';

const links = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentSpace = React.useRef<HTMLElement>(null);
  const HeaderRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(HeaderRef, () => setIsOpen(false));
  return (
    <header className='sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg'>
      <div ref={HeaderRef} className='relative'>
        <div className='layout flex items-center justify-between py-5 sm:py-3'>
          <Link className='relative h-9 w-36 md:h-[42px] md:w-[161px]' href='/'>
            <Image src='/svg/Logo.svg' fill alt='logo' />
          </Link>
          <nav>
            <ul className='hidden items-center justify-between space-x-4 md:flex'>
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
              className='hidden text-base font-normal hover:opacity-60 sm:block'
            >
              Log In
            </Link>
            <Link
              href='/signup'
              className='hidden rounded-full bg-primary px-6 py-3 text-base font-normal text-white transition-colors hover:bg-opacity-90 sm:block'
            >
              Sign Up
            </Link>
            {/* toggle menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-xl md:hidden'
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div className='layout'>
          <nav
            ref={contentSpace}
            style={{
              maxHeight: `${
                isOpen ? `${contentSpace.current?.scrollHeight}px` : '0px'
              }`,
            }}
            className='overflow-hidden transition-all duration-500 ease-in-out'
          >
            <ul className='space-y-4 bg-white pt-5 pb-10 md:hidden'>
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
        </div>
      </div>
    </header>
  );
}
