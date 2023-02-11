import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import GradientBg from '@/assets/GradientBg.svg';
import HightRigntVector from '@/assets/HighRight.svg';
import Line from '@/assets/Line.svg';
import Star from '@/assets/Star.svg';

export default function index() {
  return (
    <section className='relative'>
      <GradientBg className='absolute top-[40px] -left-[100px] h-[400px] w-[460px]' />
      <div className='layout relative flex flex-col items-center justify-center py-16 text-center'>
        <h1 className='relative max-w-[1030px] text-[88px] font-semibold leading-[96px]'>
          <HightRigntVector className='absolute -top-4 left-0 h-[51.52px] w-[52.72px]' />
          One-stop platform for university students
        </h1>
        <p className='my-7 max-w-[540px] text-xl font-light leading-8'>
          Experience university life to the fullest and ease with our dedicated
          social platform
        </p>
        <Link
          href='/'
          className='group flex cursor-pointer items-center rounded-full bg-primary py-5 px-14 text-lg font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black'
        >
          create account
          <ArrowUpRight className='ml-2 text-2xl transition-transform group-hover:rotate-45' />
        </Link>
        <div className='mt-10 flex w-full items-center'>
          <div className=''>
            <Star className='mb-[100px] h-[75.4px] w-[87.11px]' />
            <Line className='h-[253.45px] w-[143.89px]' />
          </div>
          <div className='relative ml-auto h-[880px] w-full flex-grow'>
            <Image src='/images/hero-image.png' fill alt='hero-image' />
          </div>
        </div>
      </div>
    </section>
  );
}
