import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare,BsFillRocketTakeoffFill } from "react-icons/bs"

const projects = [
  {
    name: "Music",
    description:
      "A collection of audio projects both complete, and in various stages of production, organized by genre and purpose.",
    image: "/birdiem.jpg",
    github: "https://www.youtube.com/playlist?list=PLswazYw70UOP8JuCNktm9SoceSXS3Xz_i",
    link: "ricegumvoiceirrelevant",
  },
  {
    name: "Software",
    description: "A collection of code snippets, projects, resources, games, and more.",
    image: "/coding.jpg",
    github: "https://drive.google.com/drive/folders/1oXY_c3wqUxqAJKhGo4UZFljUZU2m4Iys?usp=sharing",
    link: "ricegumvoiceirrelevant",
  },
  {
    name: "Explore With Us",
    description:
      "This explore link will take you directly to whatever project the team has been cooking up for fun lately.",
    image: "/mway.jpg",
    github: "https://colab.research.google.com/drive/12dsVQVfzKYv4C9Gz4FNevMhpqkxddZwJ?authuser=5",
    link: "ricegumvoiceirrelevant",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects and Resources
        <hr className="w-8 h-1 mx-auto my-4 bg-gradient-to-r from-red-400 to-pink-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github} target='_blank'>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-full shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="text-center items-center mt-8 md:w-1/2">
                    <h1 className="text-4xl text-center font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row py-1 justify-center align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsFillRocketTakeoffFill
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection