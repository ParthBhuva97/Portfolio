import React from 'react'
import project from '../projects.json'
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Projects = () => {
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    };

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };
  return (
    <div className="w-full flex items-center justify-center my-5">
      <motion.div
        variants={container}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-full md:w-[75%] px-5 rounded-lg bg-[#0d0d0d] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 py-5 my-5"
      >
        {project.map((project, index) => {
          return (
            <motion.div
              variants={item}
              className="bg-black p-2 md:p-5 rounded-lg flex flex-col gap-5"
            >
              <img src={project.image} alt="" />
              <div className="md:text-sm">{project.name}</div>
              <div className="md:text-sm">{project.desc}</div>
              <div className="flex gap-2">
                <div className="text-blue-500">
                  <Link to={project.live}>Live</Link>
                </div>
                <div>|</div>
                <div className="text-blue-500">
                  <Link to={project.github}>Github</Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Projects
