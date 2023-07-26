"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.7 }}
          className="flex flex-col w-1/2 md:mt-2 md:mr-2 md:w-3/4">
          <Image
            src="/me.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full shadow-2xl rounded-full"
          />
        </motion.div>
        <motion.div 
           variants={fadeIn('up', 0.4)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{ once: false, amount: 0.7 }} 
           className='flex flex-col space-y-10 mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1]'>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Welcome to Arbiter Corp 🤝</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            We are a{" "}
            <span className="font-semibold text-red-600">
              Software{" "}
            </span>
            and
            <span className="font-semibold text-red-600">
            {" "}Music{" "}
            </span>
            solutions company based in Los Angeles, CA.  Our goal is to help people do what they 
            <span className="font-semibold text-red-600">
            {" "}love{" "}
            </span>
            ❤️,
            and leave the rest to us.
          </p>
          <TypeAnimation sequence={[
              'Developers!',
              2000,
              'Designers!',
              2000,
              'Musicians!',
              2000,
              'Analysts!',
              2000

            ]} speed={50}
            className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600'
            wrapper='div'
            repeat={Infinity}
          />
          {/* <Link
            to="projects"
            className="cursor-pointer text-neutral-100 font-semibold px-3 py-1 bg-red-600 rounded shadow hover:bg-green-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </motion.div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
