import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRight from '@/assets/ArrowUpRight.svg';
import CheckCircle from '@/assets/CheckCircle.svg';
import HighLight from '@/assets/HighLightIcon.svg';
import Scribble from '@/assets/scribble.svg';
import XCircle from '@/assets/XCircle.svg';

export default function index() {
  return (
    <section className='max-w-full overflow-hidden'>
      <div className='layout justify-cente flex flex-col items-center py-16 text-center'>
        <h2 className='wow animate__animated animate__fadeInUp mb-7 text-[56px] font-bold italic'>
          Why UniSocial?
        </h2>
        <p className='wow animate__animated animate__fadeInUp max-w-[600px] text-xl font-normal'>
          Most “education” platforms work against you, than for you. Shift to
          the software that’s made by students for students.
        </p>
        <div className='relative mx-auto mt-16 grid max-w-[1038px] auto-rows-auto grid-cols-2 gap-8'>
          <div className='wow animate__animated animate__fadeInUp flex flex-col'>
            <h2 className='mx-auto h-[42px] w-fit text-[30px] font-bold'>
              <Image src='/svg/Logo.svg' width={179} height={42} alt='logo' />
            </h2>
            <div
              className='relative mt-6 flex-grow rounded-[13px] bg-white py-10 px-8'
              style={{ boxShadow: '0px 20px 100px rgba(0, 0, 0, 0.07)' }}
            >
              <HighLight className='absolute -top-10 -left-10 h-[49.35px] w-[45.05px]' />
              <h3 className='mb-7 text-left text-base font-bold uppercase tracking-[0.12em]'>
                Makes “uni-life” easy
              </h3>
              <ul className='space-y-5 [&>li]:flex [&>li]:text-left [&>li]:text-xl [&>li]:font-medium'>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' /> No hidden fees.
                  No surprises
                </li>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' />
                  Manage uni-life, with no stress
                </li>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' />
                  Supports most popular classes
                </li>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' />
                  Provides 24/7 email support
                </li>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' />
                  Integrates seamlessly with Stripe
                </li>
                <li>
                  <CheckCircle className='mr-3 text-[32px]' />
                  Works with real local data
                </li>
              </ul>
              <Scribble className='absolute -bottom-10 left-[14%] h-[19.48px] w-[340px]' />
            </div>
          </div>
          <span className='absolute inset-0 -bottom-16 z-20 m-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary text-[32px] font-bold uppercase text-white'>
            vs
          </span>
          <div className='wow animate__animated animate__fadeInUp'>
            <h2 className='h-[42px] text-[26px] font-bold tracking-[-0.01em]'>
              Other Websites
            </h2>
            <div
              className='relative z-10 mt-6 rounded-[13px] bg-white py-10 px-8'
              style={{ boxShadow: '0px 20px 100px rgba(0, 0, 0, 0.07)' }}
            >
              <h3 className='mb-7 text-left text-base font-bold uppercase tracking-[0.12em]'>
                confusing with payments
              </h3>
              <ul className='space-y-5 [&>li]:flex [&>li]:text-left [&>li]:text-xl [&>li]:font-medium'>
                <li>
                  <XCircle className='mr-3 text-[32px]' /> Complicated fee
                  structure
                </li>
                <li>
                  <XCircle className='mr-3 text-[32px]' />
                  Need a lot of manual data adjustments
                </li>
                <li>
                  <XCircle className='mr-3 text-[32px]' />
                  Consistently wrong answers to questions
                </li>
                <li>
                  <XCircle className='mr-3 text-[32px]' />
                  Have poor support and wait times
                </li>
                <li>
                  <XCircle className='mr-3 text-[32px]' />
                  Have spotty integrations
                </li>
                <li>
                  <XCircle className='mr-3 text-[32px]' />
                  Use unfair & unethical techniques
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href='/'
          className='wow animate__animated animate__fadeInUp group mt-32 flex cursor-pointer items-center rounded-full bg-primary py-5 px-12 text-lg font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black'
        >
          create account
          <ArrowUpRight className='ml-2 text-2xl transition-transform group-hover:rotate-45' />
        </Link>
        <p className='wow animate__animated animate__fadeInUp mt-3 text-sm'>
          Doesn’t hurt to try....
        </p>
      </div>
    </section>
  );
}
