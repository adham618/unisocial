import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import EllipseTop from '@/assets/EllipseTop.svg';
import HightRigntVector from '@/assets/HighRight.svg';

export default function index() {
  return (
    <section className='max-w-full overflow-hidden'>
      <div className='layout grid grid-cols-12 gap-8 pb-10 pt-16 text-center'>
        <div className='wow animate__animated animate__fadeInUp col-span-8 rounded-[22px] bg-primary px-12 py-10'>
          <h2 className='relative top-0 left-0 text-left text-[56px] font-bold italic leading-[64px] tracking-tight text-white'>
            <HightRigntVector className='absolute -top-3 -left-4 fill-white text-[23px]' />
            Student social platform that handles it all.
          </h2>
          <Link
            href='#'
            className='group mt-12 flex w-fit cursor-pointer items-center rounded-full bg-white py-5 px-12 text-base font-bold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white'
          >
            See all Features
            <ArrowUpRight className='ml-2 stroke-black text-2xl transition-transform group-hover:rotate-45 group-hover:stroke-white' />
          </Link>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp relative z-10 col-span-4 rounded-[22px]  bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/meet.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mb-4 mt-8 text-[30px] font-bold leading-[40px] tracking-[-0.01em]'>
            Meet Similar People
          </h2>
          <p className='text-lg leading-8'>
            Discover like-minded students and expand your university network
            within your interests
          </p>
          <EllipseTop className='absolute  top-[148px] left-[-186px] -z-10 h-[299.61px] w-[435.88px]' />
        </div>
      </div>
      <div className='layout grid grid-cols-3 gap-8 pb-16'>
        <div
          className='wow animate__animated animate__fadeInUp rounded-[22px] bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/manage.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mb-4 mt-8 text-[30px] font-bold leading-[40px] tracking-[-0.01em]'>
            Manage Events
          </h2>
          <p className='text-lg leading-8'>
            Easily find, plan, and organize events with other students.
          </p>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp rounded-[22px] bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/local.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mb-4 mt-8 text-[30px] font-bold leading-[40px] tracking-[-0.01em]'>
            Local Opportunities
          </h2>
          <p className='text-lg leading-8'>
            Access local jobs, deals, and products tailored to the interests you
            choose.
          </p>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp rounded-[22px] bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/personal.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mb-4 mt-8 text-[30px] font-bold leading-[40px] tracking-[-0.01em]'>
            AI Personal Tutor
          </h2>
          <p className='text-lg leading-8'>
            Get personalized academic support for the most popular classes from
            AI virtual tutors.
          </p>
        </div>
      </div>
    </section>
  );
}
