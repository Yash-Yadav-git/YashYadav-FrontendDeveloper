import React from "react";

const NotFound = () => {
  return (
    <div class="flex items-center justify-center w-screen h-48 ">
      <p class="text-3xl text-white md:text-7xl lg:text-9xl">
        Search did not return any results..
      </p>
      <p class="text-2xl text-white md:text-7xl lg:text-9xl">Please retry.. </p>
    </div>
  );
};

export default NotFound;
