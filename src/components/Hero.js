import React from 'react';
import HeroImg from '../assets/HeroImg.png';

const Hero = () => {
  return (
    <section className="">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-xl  tracking-tight leading-none md:text-3xl xl:text-4xl ">
        Want anything to be easy <br/> with <span className='font-extrabold  text-3xl  xl:text-5xl'>CreativeWorks.</span>
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg  dark:text-gray-400">
        Provide a network for all your needs with ease and fun using CretiveWorks discover interesting features from us.
        </p>
        <a
          href="#"
          className="inline-flex shadow__btn items-center justify-center  text-base font-medium text-center border border-gray-300 rounded-lg "
        >
          Get Started
        </a>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src={HeroImg}
          alt="mockup"
        />
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
