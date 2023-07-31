"use client" // this is a client component
import React from "react"
import Image from "next/image"
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';



const skills = [
  { skill: "Python" },
  { skill: "Mojo" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SQL" },
  { skill: "Data Visualization" },
  { skill: "Project Management" },
  { skill: "Research" },
  { skill: "Modern Music Workflow" },
  { skill: "Concept Design" },
  { skill: "Deployment" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className=" my-12 pb-12 md:pt-16 md:pb-48">
        <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7 }}
        >
          <h1 className="text-center font-bold text-4xl">
          How Can We Help? <a className="hidden md:visible">🎈</a>
          <hr className="w-8 h-1 mx-auto my-4 bg-gradient-to-r from-red-400 to-pink-600 border-0 rounded"></hr>
          </h1>
          </motion.div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Our Services:
            </h1>
            <p>
              Hi there! Thanks for taking the time to check out the website.  We are <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-violet-600">Arbiter Corp</a>. A team of{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineers, musicians and data scientists
              based in Los Angeles, CA.
              <br></br>
              <br></br>
              <a className="font-bold">We offer:</a>
            </p>
            <br />
            <ul
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600"
            >
              <li>•Software Developement</li>
              <li>•Data Collection</li>
              <li>•Data Analysis</li>
              <li>•UX Design</li>
              <li>•UI Developement</li>
              <li>•Machine Learning</li>
              <li>•OpSec</li>
              <li>•Music Production & Composition</li>
              <li>•Sound Design</li>
              <li>•Mixing & Mastering</li>
              <li>•Product Testing</li>
              <li>•Marketing</li>
              <li>•and more...</li>

            </ul>
            <br />
            <p>
              Did I say we? Well, for now it's just me. I'm Jacob Boulgarides, a software devoloper and artist. I have a wide range of inspirations and passions, which 
              pushes me to continue exploring new territory.  I know 
              just how important your vision can be, this is what drives me.
              I am always seeking new experiences and I love to keep myself
              engaged and learning new things.  This website was an attempt for me to better understand modern front end developement.  It was built with next.js as well as tailwind css,
              and was deployed using Vercel.  Feedback on any of my projects is most welcome (I will be adding a comment section to this website to make this easier in the future).
              As of right now, I am looking to finally get my feet wet in an official software developer role.  I have the foundation and functional knowledge to help build 
              performant solutions in a professional environment. 
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-red-500">
                never stop growing
              </span>,{" "}
              and that&#39;s why I strive to do more. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I'm extremely excited to see where the future takes me, and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Some of My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
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

export default AboutSection
