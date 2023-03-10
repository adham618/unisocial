import Image from 'next/image';
import Link from 'next/link';
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const pagesLinks = [
  {
    label: 'Homepage',
    link: '/',
  },
  {
    label: 'Features',
    link: '/features',
  },
  {
    label: 'Company',
    link: '/company',
  },
];
const legalLinks = [
  {
    label: 'Terms of Service',
    link: '/terms-of-service',
  },
  {
    label: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    label: 'Licenses',
    link: '/licenses',
  },
];
const socialLinks = [
  {
    link: 'https://www.facebook.com/',
    icon: <GrFacebookOption />,
  },
  {
    link: 'https://twitter.com/',
    icon: <GrTwitter />,
  },
  {
    link: 'https://www.linkedin.com/',
    icon: <GrLinkedinOption />,
  },
  {
    link: 'https://www.instagram.com/',
    icon: <RiInstagramFill />,
  },
];

export default function Footer() {
  return (
    <footer className='max-w-full overflow-hidden bg-white'>
      <div className='layout'>
        <div className='flex flex-col justify-between gap-4 gap-y-10 py-16 pb-20 sm:pb-32 lg:flex-row'>
          <div className='max-w-[270px]'>
            <Link href='/' aria-label='logo'>
              <Image src='/svg/Logo.svg' width={161} height={42} alt='logo' />
            </Link>
            <p className='mt-4 text-lg font-light leading-8'>
              One-stop platform for university students.
            </p>
          </div>
          <div className='flex flex-wrap gap-10 md:justify-between lg:flex-nowrap lg:justify-start lg:gap-20'>
            <div>
              <h3 className='text-sm font-bold uppercase leading-[22px] tracking-[0.08em]'>
                Pages
              </h3>
              <ul className='mt-8 space-y-4'>
                {pagesLinks.map(({ label, link }) => (
                  <li key={label}>
                    <a
                      href={link}
                      className='text-base font-light transition-colors hover:opacity-60'
                      aria-label={label}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-bold uppercase leading-[22px] tracking-[0.08em]'>
                Legal
              </h3>
              <ul className='mt-8 space-y-4'>
                {legalLinks.map(({ label, link }) => (
                  <li key={label}>
                    <a
                      href={link}
                      className='text-base font-light transition-colors hover:opacity-60'
                      aria-label={label}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='space-y-8'>
              <div>
                <h3 className='text-sm font-bold uppercase leading-[22px] tracking-[0.08em]'>
                  Subscribe to our newsletter
                </h3>

                <form className='mt-8 flex items-center space-x-3 sm:space-x-5'>
                  <input
                    className='focus: w-[300px] max-w-[70vw] rounded-[32px] border-none border-transparent bg-[#F4F4F4] px-6 py-4 text-base font-light ring-0 placeholder:text-[#494949] focus:border-none focus:border-transparent focus:outline-none focus:ring-0'
                    type='email'
                    placeholder='Enter your email'
                  />
                  <button
                    className='flex h-14 w-14 items-center justify-center rounded-full bg-black text-[33px] font-light text-white transition-colors hover:bg-primary'
                    type='submit'
                    aria-label='Subscribe'
                  >
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </form>
              </div>
              <div>
                <h3 className='text-sm font-bold uppercase leading-[22px] tracking-[0.08em]'>
                  Social Media
                </h3>
                <ul className='mt-4 flex space-x-3'>
                  {socialLinks.map(({ icon, link }) => (
                    <li key={link}>
                      <a
                        href={link}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F4F4] text-xl transition-all hover:translate-x-0 hover:translate-y-[-5px] hover:transform hover:bg-primary hover:text-white'
                        aria-label='Social Media'
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-[#E5E5E5] py-5'>
          <p className='text-base font-light'>Copyright ?? UniSocial</p>
        </div>
      </div>
    </footer>
  );
}
