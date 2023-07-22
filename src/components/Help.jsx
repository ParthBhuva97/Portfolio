import React from 'react'

const Help = () => {
  return (
    <div>
      <div className="pt-5">
        <h1 className="text-xl">Available Commands</h1>
        <div className="py-2 text-lg">
          <span className="text-blue-500">start:</span> tells you about me
        </div>
        <div className="py-2 text-lg">
          <span className="text-blue-500">skills: </span>tells about my tech
          knowledge
        </div>
        <div className="py-2 text-lg">
          <span className="text-blue-500">projects:</span> displays my projects
        </div>
      </div>
    </div>
  );
}

export default Help
