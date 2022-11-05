import React from "react";
import { ReactComponent as DownArrow } from "../assests/down.svg";

const Banner = () => {
  return (
    <header className="w-full h-full relative bg-hero2 bg-cover bg-center bg-fixed flex flex-col justify-between  text-white scroll-smooth">
      <nav className="w-full flex justify-start m-3 p-2  items-center">
        <div className="">
          <h1 className="text-6xl">SpaceX</h1>
        </div>
        <div className="hidden md:flex justify-end w-5/6 items-center">
          <div className="flex justify-evenly w-1/2 items-center">
            <a className="text-lg font-bold" href="#search">
              SEARCH
            </a>
            <a className="text-lg font-bold" href="#data">
              DATA
            </a>
          </div>
        </div>
      </nav>
      <div className=" w-full h-48 flex justify-center items-center">
        <div className="absolute w-10 h-12 animate-pulse">
          <DownArrow />
        </div>
      </div>
    </header>
  );
};

export default Banner;
