"use client" // this is a client component
import React from "react"

import {motion} from 'framer-motion'
import {fadeIn} from '../variants';


const ContactSection = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7 }}
        >
          <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-8 h-1 mx-auto my-4 bg-gradient-to-r from-red-400 to-pink-600 border-0 rounded"></hr>
          </h1>
          </motion.div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className=" md:w-1/2 ">
            <h1 className="justify-center text-center text-2xl font-bold mb-6 md:text-left">
              Whether you&apos;re interested in <span className="font-bold text-red-500">working with us</span>, or just want to <span className="font-bold text-red-500">learn more</span> we&apos;d love to hear from you!
              <hr className="w-8 h-1 mx-auto my-4 bg-gradient-to-r from-red-400 to-pink-600 border-0 rounded"></hr>
            </h1>
            <p className="text-center">Email: <a className="hover:text-neutral-500 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-600" href=" mailto:jboulgarides@arbitercorp.com">jboulgarides@arbitercorp.com</a></p>
            <p className="text-center">Phone: <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-600">(949)-212-6042</a></p>
            <p className="text-center">
              Thanks for taking the time to check out
              <br className="visible md:invisible"></br> 
              <a href="#home"className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-600">Arbiter Corp</a>
              <br></br>
              We also have some social media links at the bottom of the page.
            </p>
          </div>
            
        
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"          
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
        </Link>
      </div> */}
    </section>
  )
}

export default ContactSection