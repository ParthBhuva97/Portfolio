import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
    <motion.div
    variants={container}
      initial={{ scale: 0}}
      animate={{ scale: 0.9}}
      className="w-full flex items-center justify-center my-5"
    >
      <motion.div
      variants={item}
        initial={{ boxShadow: "0px 0px 0px green" }}
        whileHover={{ boxShadow: "0px 0px 25px green" }}
        className="md:w-[75%] rounded-lg bg-[#0d0d0d] flex flex-col items-center justify-center py-5"
      >
        <img
          className="rounded-full object-cover w-[50%] h-[50%] md:w-[25%] md:h-[25%]"
          src="/profile.jpg"
          alt="Profile"
        />
        <div className="py-5 text-xl">
          Hi, I am{" "}
          <span className="text-green-500 text-2xl uppercase">
            Parth Bhuva.
          </span>
        </div>
        <div className="w-[70%]">
          <div className="py-3 text-center">
            Skilled MERN Developer, looking for opportunities to show and create
            unique applications. Interested in Designing, working on creative
            Ideas, and using modern technology.
          </div>
          <div className="py-2 text-center">
            Also love to stay up-to-date with chess. Explore the terminal you
            may find some new commands.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
