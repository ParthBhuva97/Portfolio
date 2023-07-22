import React from 'react'
import Command from './Command';

const Terminal = () => {
  return (
    <div className="bg-black min-h-[95vh] text-white px-3 py-5 font-default">
      <div>Welcome to My Portfolio!</div>
      <div className='pt-5 md:pt-0'>
        Get started by typing <span className='text-blue-500'>help</span> command below . . .
      </div>
      <Command />
    </div>
  );
}

export default Terminal
