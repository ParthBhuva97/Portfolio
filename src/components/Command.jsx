import React, { useEffect, useState } from "react";
import Output from "./Output";
import { useRef } from "react";

const Command = () => {
  const [fired,setFired] = useState(false);
  const [command, setCommand] = useState('');
  const inputref = useRef(null);
  useEffect(()=>{
    inputref.current.focus();
  })
  return (
    <>
      <div className="flex gap-3 w-full mt-5">
        <span className="text-blue-500">parth &gt;&gt;</span>
        <input
        ref={inputref}
          className="w-[60%] md:w-[80%] text-white bg-black focus:outline-none"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFired(true);
              setCommand(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
      {fired ? <Output command={command} /> : null}
    </>
  );
};

export default Command;
