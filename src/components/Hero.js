import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 to-pink-500 text-white">
      <h1 className="text-4xl font-bold">I am Saurav Kumar</h1>
      <p className="mt-2 text-lg">Quality Assurance Analyst & Content Creator</p>
      <button className="mt-4 px-6 py-2 bg-white text-gray-800 rounded-lg font-semibold">
        View My Work
      </button>
    </div>
  );
};

export default Hero;
