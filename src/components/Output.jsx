import React from "react";
import About from "./About";
import Help from "./Help";
import Skills from "./Skills";
import Projects from "./Projects";

const Output = ({ command }) => {
  const commands = ["help", "start", "skills", "projects"];
  return (
    <div>
      {commands.includes(command) ? (
        command === "help" ? (
          <Help />
        ) : command === "start" ? (
          <About />
        ) : command === "skills" ? (
          <Skills />
        ) : command === "projects" ? (
          <Projects />
        ) : (
          null
        )
      ) : (
        <div className="text-red-500">Enter Valid Command</div>
      )}
    </div>
  );
};

export default Output;
