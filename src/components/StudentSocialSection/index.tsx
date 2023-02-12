import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import HightRigntVector from '@/assets/HighRight.svg';

export default function index() {
  return (
    <section className='max-w-full overflow-hidden'>
      <div className='layout flex flex-wrap gap-8 py-16 text-center lg:grid lg:grid-cols-12'>
        <div className='wow animate__animated animate__fadeInUp col-span-8 mx-auto w-fit rounded-[22px] bg-primary px-8 py-9 sm:py-10 sm:px-12'>
          <h2 className='relative top-0 left-0 text-left text-4xl font-bold italic tracking-tight text-white sm:text-[56px] sm:leading-[64px]'>
            <HightRigntVector className='absolute -top-3 -left-4 fill-white text-[23px]' />
            Student social platform that handles it all.
          </h2>
          <Link
            href='/features'
            className='group mt-8 flex w-fit cursor-pointer items-center rounded-full bg-white py-4 px-6 text-base font-bold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white sm:mt-12 sm:py-5 sm:px-12'
          >
            See all Features
            <ArrowUpRight className='ml-2 stroke-black text-2xl transition-transform group-hover:rotate-45 group-hover:stroke-white' />
          </Link>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp relative z-10 col-span-4 mx-auto w-fit max-w-[400px] rounded-[22px]  bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/meet.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mt-6 mb-2 text-2xl font-bold leading-[40px] tracking-[-0.01em] sm:mt-8 sm:mb-4 sm:text-[30px]'>
            Meet Similar People
          </h2>
          <p className='text-lg leading-8'>
            Discover like-minded students and expand your university network
            within your interests
          </p>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp relative z-10 col-span-4 mx-auto w-fit max-w-[400px] rounded-[22px]  bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/manage.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mt-6 mb-2 text-2xl font-bold leading-[40px] tracking-[-0.01em] sm:mt-8 sm:mb-4 sm:text-[30px]'>
            Manage Events
          </h2>
          <p className='text-lg leading-8'>
            Easily find, plan, and organize events with other students.
          </p>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp relative z-10 col-span-4 mx-auto w-fit max-w-[400px] rounded-[22px]  bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/local.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mt-6 mb-2 text-2xl font-bold leading-[40px] tracking-[-0.01em] sm:mt-8 sm:mb-4 sm:text-[30px]'>
            Local Opportunities
          </h2>
          <p className='text-lg leading-8'>
            Access local jobs, deals, and products tailored to the interests you
            choose.
          </p>
        </div>
        <div
          className='wow animate__animated animate__fadeInUp relative z-10 col-span-4 mx-auto w-fit max-w-[400px] rounded-[22px]  bg-white px-8 py-10 text-left'
          style={{ boxShadow: '0px 13px 100px rgba(199, 199, 199, 0.25)' }}
        >
          <Image
            src='/images/personal.png'
            width={80}
            height={80}
            alt='card-image'
          />
          <h2 className='mt-6 mb-2 text-2xl font-bold leading-[40px] tracking-[-0.01em] sm:mt-8 sm:mb-4 sm:text-[30px]'>
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
