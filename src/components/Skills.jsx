import React from 'react'
import skills from '../skills.json'
import {motion} from 'framer-motion'

const Skills = () => {
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
    <motion.div className="w-full flex items-center justify-center my-5">
      <motion.div
        variants={container}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-full md:w-[75%] px-5 rounded-lg bg-[#0d0d0d] grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 py-5 my-5"
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              variants={item}
              className="bg-black py-5 rounded-lg flex flex-col items-center"
            >
              <div>
                <img
                  className="object-fit w-[5rem] h-[5rem]"
                  src={skill.image}
                  alt=""
                />
              </div>
              <div>{skill.name}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills
