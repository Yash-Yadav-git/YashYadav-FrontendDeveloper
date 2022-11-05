import React from "react";

const NotFound = () => {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-48 ">
      <h1 class="text-sm text-white md:text-xl lg:text-xl">
        Search did not return any results..
      </h1>
      <h1 class="text-sm text-white md:text-xl lg:text-xl">Please retry.. </h1>
    </div>
  );
};

export default NotFound;
