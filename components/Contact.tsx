"use client" // this is a client component
import React from "react"
import Image from "next/image"
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
import { FaCrow } from 'react-icons/fa';


const ContactSection = () => {
  return (
    <section id="contact">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.7 }}
          className="flex flex-col items-center justify-center w-1/4 md:mt-2 md:mr-2 md:w-1/2">
          <Image
            src="/logo2.svg"
            alt=""
            width={400}
            height={400}
            className="shadow-2xl rounded-full"
          />
        </motion.div>
        <motion.div 
           variants={fadeIn('left', 0.2)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{ once: false, amount: 0.7 }} 
           className='flex flex-col space-y-10 mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1]'>
          <h1 className="text-center font-bold text-4xl">Contact Us! 📱</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Whether you are interested in{" "} 
            <span className="font-semibold text-red-600">
            working with us 
            </span>
            , or would just like to{" "} 
            <span className="font-semibold text-red-600">
            learn more 
            </span>
            , feel free to
            send us an
            <br></br>
            <br></br>
            
            
                <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600" href = " mailto:jboulgarides@arbitercorp.com">
                    Email
                    
                </a>
            
                <FaCrow
                    size={30}
                    className="cursor-pointer invisible md:visible"
                />
                

            Or give us a call!
            <br></br>
            
            (949)-212-6042 
          </p>
          <TypeAnimation sequence={[
              "Thanks for stopping by!",
              2000,
              'Have a great day!',
              2000,

            ]} speed={50}
            className='text-2xl font-bold mt-6 md:mt-0 md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600'
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
          <p
          className="text-[16px]"
          >P.S. we have some social media links at the bottom too 😉</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
