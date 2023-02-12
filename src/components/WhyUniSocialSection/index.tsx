import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import CheckCircle from '@/assets/CheckCircle.svg';
import ExlipseGroup from '@/assets/ExlipseGroup.svg';
import HighLight from '@/assets/HighLightIcon.svg';
import Scribble from '@/assets/scribble.svg';
import XCircle from '@/assets/XCircle.svg';

export default function index() {
  return (
    <section className='max-w-full overflow-hidden'>
      <div className='layout justify-cente flex flex-col items-center py-16 text-center'>
        <h2 className='wow animate__animated animate__fadeInUp mb-5 text-4xl font-bold italic sm:mb-7 sm:text-5xl lg:text-[56px]'>
          Why UniSocial?
        </h2>
        <p className='wow animate__animated animate__fadeInUp max-w-[600px] text-base font-normal sm:text-xl'>
          Most “education” platforms work against you, than for you. Shift to
          the software that’s made by students for students.
        </p>
        <div className='relative mx-auto mt-16 grid max-w-[82vw] auto-rows-auto gap-8 gap-y-10 sm:max-w-[1038px] sm:gap-y-40 lg:grid-cols-2'>
          <div className='wow animate__animated animate__fadeInUp flex flex-col'>
            <h2 className='relative mx-auto  h-9 w-36 text-[30px] font-bold sm:h-[42px] sm:w-[179px]'>
              <Image src='/svg/Logo.svg' fill alt='logo' />
            </h2>
            <div
              className='relative z-10 mt-4 rounded-[13px] bg-white py-5 px-4 sm:mt-6 sm:py-10 sm:px-8'
              style={{ boxShadow: '0px 20px 100px rgba(0, 0, 0, 0.07)' }}
            >
              <HighLight className='absolute -top-7 -left-7 text-3xl sm:-top-10 sm:-left-10 sm:h-[49.35px] sm:w-[45.05px]' />
              <h3 className='mb-5 text-left text-base font-bold uppercase tracking-[0.12em] sm:mb-7'>
                Makes “uni-life” easy
              </h3>
              <ul className='space-y-4 sm:space-y-5 [&>li]:flex [&>li]:text-left [&>li]:text-sm  [&>li]:font-medium sm:[&>li]:text-xl'>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' /> No hidden
                  fees. No surprises
                </li>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' />
                  Manage uni-life, with no stress
                </li>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' />
                  Supports most popular classes
                </li>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' />
                  Provides 24/7 email support
                </li>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' />
                  Integrates seamlessly with Stripe
                </li>
                <li>
                  <CheckCircle className='mr-3 text-xl text-[32px]' />
                  Works with real local data
                </li>
              </ul>
              <Scribble className='absolute -bottom-10 h-[19.48px] w-[340px] max-w-full sm:left-[14%]' />
            </div>
          </div>
          <span className='m-auto mt-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold uppercase text-white sm:absolute sm:inset-0 sm:-bottom-16 sm:z-20 sm:mt-auto sm:h-[72px] sm:w-[72px] sm:text-[32px]'>
            vs
          </span>
          <ExlipseGroup className='absolute inset-0 mx-auto hidden h-full w-[978.16px] max-w-[80vw] lg:block lg:h-[600px]' />
          <div className='wow animate__animated animate__fadeInUp'>
            <h2 className='h-8 text-xl font-bold tracking-[-0.01em] sm:h-[42px] sm:text-[26px]'>
              Other Websites
            </h2>
            <div
              className='relative z-10 mt-4 rounded-[13px] bg-white py-5 px-4 sm:mt-6 sm:py-10 sm:px-8'
              style={{ boxShadow: '0px 20px 100px rgba(0, 0, 0, 0.07)' }}
            >
              <h3 className='mb-7 text-left text-base font-bold uppercase tracking-[0.12em]'>
                confusing with payments
              </h3>
              <ul className='space-y-4 sm:space-y-5 [&>li]:flex [&>li]:text-left [&>li]:text-sm  [&>li]:font-medium sm:[&>li]:text-xl'>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' /> Complicated
                  fee structure
                </li>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' />
                  Need a lot of manual data adjustments
                </li>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' />
                  Consistently wrong answers to questions
                </li>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' />
                  Have poor support and wait times
                </li>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' />
                  Have spotty integrations
                </li>
                <li>
                  <XCircle className='mr-3 text-xl text-[32px]' />
                  Use unfair & unethical techniques
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href='/'
          className='wow animate__animated animate__fadeInUp group mt-20 flex cursor-pointer items-center rounded-full bg-primary py-4 px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black sm:mt-32 sm:py-5 sm:px-12 sm:text-lg'
        >
          create account
          <ArrowUpRight className='ml-2 text-xl transition-transform group-hover:rotate-45 sm:text-2xl' />
        </Link>
        <p className='wow animate__animated animate__fadeInUp mt-3 text-xs sm:text-sm'>
          Doesn’t hurt to try....
        </p>
      </div>
    </section>
  );
}
