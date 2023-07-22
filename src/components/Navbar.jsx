import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-[5vh] bg-gray-200 p-2 ">
      <div className="w-[30%] md:w-[10%] lg:w-[5%] flex justify-between">
        <div className="bg-red-500 rounded-full w-5 h-5"></div>
        <div className="bg-yellow-500 rounded-full w-5 h-5"></div>
        <div className="bg-green-500 rounded-full w-5 h-5"></div>
      </div>
    </nav>
  );
}

export default Navbar
