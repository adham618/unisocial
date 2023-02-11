import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import RightGradientBg from '@/assets/gradient-2.svg';
import TOPGradientBg from '@/assets/gradient-3.svg';
import LeftGradientBg from '@/assets/GradientBg.svg';
import HightRigntVector from '@/assets/HighRight.svg';
import Line from '@/assets/Line.svg';
import Star from '@/assets/Star.svg';

export default function index() {
  return (
    <section className='relative max-w-full overflow-hidden'>
      <LeftGradientBg className='absolute top-[40px] -left-[100px] h-[400px] w-[460px]' />
      <div className='layout relative flex flex-col items-center justify-center py-16 text-center'>
        <h1 className='wow animate__animated animate__fadeInUp relative max-w-[1030px] text-[88px] font-semibold italic leading-[96px]'>
          <HightRigntVector className='absolute -top-4 left-0 h-[51.52px] w-[52.72px]' />
          One-stop platform for university students
        </h1>
        <p className='wow animate__animated animate__fadeInUp my-7 max-w-[540px] text-xl font-light leading-8'>
          Experience university life to the fullest and ease with our dedicated
          social platform
        </p>
        <div className='wow animate__animated animate__fadeInUp flex flex-col items-center justify-center'>
          <Link
            href='/'
            className='group flex cursor-pointer items-center rounded-full bg-primary py-5 px-14 text-lg font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black'
          >
            create account
            <ArrowUpRight className='ml-2 text-2xl transition-transform group-hover:rotate-45' />
          </Link>
          <div className='mt-7 flex'>
            <div>
              <div className='flex items-center justify-center space-x-4'>
                <Image
                  src='/images/imageedit.png'
                  width={32}
                  height={32}
                  alt='university'
                />
                <Image
                  src='/images/McGill.png'
                  width={26}
                  height={33}
                  alt='university'
                />
              </div>
              <span className='text-center text-[10px] font-medium text-[#7F7F7D]'>
                Concordia & Mcgill
              </span>
            </div>
            <div className='mr-6 ml-5 h-6 w-[1px] bg-[#c4c4c4]' />
            <div>
              <div className='flex items-center justify-center space-x-4'>
                <Image
                  src='/images/QueensU.png'
                  width={22}
                  height={28}
                  alt='university'
                />
                <Image
                  src='/images/uottawa.png'
                  width={23}
                  height={27}
                  alt='university'
                />
                <Image
                  src='/images/Utoronto.png'
                  width={31}
                  height={31}
                  alt='university'
                />
              </div>
              <span className='text-center text-[10px] font-medium text-[#7F7F7D]'>
                Coming soon
              </span>
            </div>
          </div>
        </div>

        <div className='mt-10 flex w-full items-center'>
          <div>
            <Star className='mb-[100px] h-[75.4px] w-[87.11px]' />
            <Line className='h-[253.45px] w-[143.89px]' />
          </div>
          <div className='wow animate__animated animate__bounceIn relative z-20 ml-auto h-[880px] w-full flex-grow'>
            <TOPGradientBg className='absolute top-0 left-[-108px] z-10 h-[229.5px] w-[280.83px]' />
            <Image src='/images/hero-image.png' fill alt='hero-image' />
          </div>
        </div>
      </div>
      <RightGradientBg className='absolute bottom-0 -right-[10vw] -z-10 h-[1200px] w-[1000px]' />
    </section>
  );
}
