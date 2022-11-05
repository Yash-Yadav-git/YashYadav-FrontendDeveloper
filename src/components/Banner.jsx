import React from "react";

const Banner = () => {
  return (
    <header className="w-full h-full bg-hero bg-cover bg-center bg-fixed flex flex-col justify-between  text-white scroll-smooth">
      <nav className="w-full flex justify-start m-3 p-2  items-center">
        <div className="">
          <h1 className="text-6xl">SpaceX</h1>
        </div>
        <div className="flex justify-end w-5/6 items-center">
          <div className="flex justify-evenly w-1/2 items-center">
            <a className="text-xl font-bold" href="#search">
              SEARCH
            </a>
            <a className="text-xl font-bold" href="#data">
              DATA
            </a>
          </div>
        </div>
      </nav>
      <div className="w-2/6 h-48 flex justify-center items-center">
        <div className="felx justify-center items-center p-5 space-y-12">
          <h1 className="text-3xl">Space cpasule Infomatica</h1>
          <a href="#search">
            <button class="bg-transparent border-2 border-white mt-5 p-2 hover:bg-white hover:text-black w-32 h-12">
              Search
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Banner;
