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
        <h1 className='wow animate__animated animate__fadeInUp relative max-w-[1030px] text-5xl font-semibold italic leading-[64px] lg:text-[88px] lg:leading-[96px]'>
          <HightRigntVector className='absolute -top-4 left-0 text-4xl lg:h-[51.52px] lg:w-[52.72px]' />
          One-stop platform for university students
        </h1>
        <p className='wow animate__animated animate__fadeInUp my-7 max-w-[540px] text-lg font-light leading-8 sm:text-xl'>
          Experience university life to the fullest and ease with our dedicated
          social platform
        </p>
        <div className='wow animate__animated animate__fadeInUp flex flex-col items-center justify-center'>
          <Link
            href='/'
            className='group mt-1 flex cursor-pointer items-center rounded-full bg-primary py-4 px-6 text-base font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black sm:mt-5 sm:py-5 sm:px-14 sm:text-lg'
          >
            create account
            <ArrowUpRight className='ml-2 text-xl transition-transform group-hover:rotate-45 sm:text-2xl' />
          </Link>
          <div className='mt-7 flex flex-col gap-y-4 sm:flex-row'>
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
            <div className='mx-auto h-6 w-[1px] rotate-90 bg-[#c4c4c4] sm:mr-6 sm:ml-5 sm:rotate-0' />
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

        <div className='relative mt-10 flex w-full items-center'>
          <div>
            <Star className='absolute -top-6 text-6xl md:static md:h-[75.4px] md:w-[87.11px]' />
            <Line className='absolute -left-4 bottom-0 h-[130px] w-[90px] md:h-[253.45px] md:w-[143.89px]' />
          </div>
          <div className='wow animate__animated animate__bounceIn relative z-20 ml-auto h-[300px] w-full flex-grow xs:h-[340px] sm:h-[500px] md:h-[700px] lg:h-[880px]'>
            <TOPGradientBg className='absolute top-[60px] left-[-50px] z-10 h-[10vh] w-[280.83px] lg:h-[229.5px]' />
            <Image src='/images/hero-image.png' fill alt='hero-image' />
          </div>
        </div>
      </div>
      <RightGradientBg className='absolute bottom-0 -right-[10vw] -z-10 h-[50vh] w-[1000px] max-w-[40vw] lg:h-[1200px]' />
    </section>
  );
}
