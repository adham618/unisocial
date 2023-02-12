import Image from 'next/image';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import Mark from '@/assets/Mark.svg';

export default function index() {
  return (
    <section className='max-w-full overflow-hidden'>
      <div className='layout space-y-24 py-16'>
        <div className='flex flex-col items-center justify-between gap-6 lg:flex-row'>
          <div className='wow animate__animated animate__fadeInUp relative h-[350px] w-[560px] max-w-full xs:h-[400px] sm:h-[500px] lg:h-[580px]'>
            <Image src='/images/feature-image.png' fill alt='feature-image' />
          </div>
          <div className='wow animate__animated animate__fadeInUp w-[510px] max-w-full'>
            <h2 className='text-4xl font-bold italic tracking-tight sm:text-[56px] sm:leading-[64px]'>
              Meet like-minded people in one place
            </h2>
            <p className='mt-5 mb-7 text-base font-normal sm:text-xl sm:leading-8'>
              Connect with individuals sharing similar interests, all in one
              convenient location.
            </p>
            <ul className='space-y-4 sm:space-y-5 [&>li]:flex [&>li]:items-center [&>li]:text-base [&>li]:font-medium sm:[&>li]:text-xl'>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' /> No hidden fees.
              </li>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' />
                100% security. Guaranteed.
              </li>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' />
                No maintenance needed.
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-6 lg:flex-row-reverse'>
          <div className='wow animate__animated animate__fadeInUp relative h-[350px] w-[560px] max-w-full xs:h-[400px] sm:h-[500px] lg:h-[580px]'>
            <Image src='/images/feature-image.png' fill alt='feature-image' />
          </div>
          <div className='wow animate__animated animate__fadeInUp w-[530px] max-w-full'>
            <h2 className='text-4xl font-bold italic tracking-tight sm:text-[56px] sm:leading-[64px]'>
              Find events, jobs, news, and more across your campus
            </h2>
            <p className='mt-5 mb-7 text-base font-normal sm:text-xl sm:leading-8'>
              Discover all the exciting opportunities available in your area,
              from social events and clubs to job postings and exclusive deals.
            </p>
            <p className='mt-5 mb-7 text-base font-normal sm:text-xl sm:leading-8'>
              Create and promote your own events, ranging from student club
              meetings and educational workshops to parties and social
              gatherings.
            </p>
            <a
              className='flex items-center text-sm font-semibold uppercase hover:underline sm:text-base sm:font-bold'
              href='#'
            >
              <span className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black text-base sm:text-2xl'>
                <ArrowUpRight />
              </span>
              Learn More
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-6 lg:flex-row'>
          <div className='wow animate__animated animate__fadeInUp relative h-[350px] w-[560px] max-w-full xs:h-[400px] sm:h-[500px] lg:h-[580px]'>
            <Image src='/images/feature-image.png' fill alt='feature-image' />
          </div>
          <div className='wow animate__animated animate__fadeInUp w-[510px] max-w-full'>
            <h2 className='text-4xl font-bold italic tracking-tight sm:text-[56px] sm:leading-[64px]'>
              Ace your classes with our AI Tutor
            </h2>
            <p className='mt-5 mb-7 text-base font-normal sm:text-xl sm:leading-8'>
              Our AI Tutor uses cutting-edge technology to help you excel in
              your classes. Get personalized support and practice with
              challenging concepts to boost your grades and achieve academic
              success.
            </p>
            <ul className='space-y-4 sm:space-y-5 [&>li]:flex [&>li]:items-center [&>li]:text-base [&>li]:font-medium sm:[&>li]:text-xl'>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' /> Trained on
                high-quality class data
              </li>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' />
                Say hello to a smarter way of learning.
              </li>
              <li>
                <Mark className='mr-4 text-xl text-[26px]' />
                No training or maintenance needed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
