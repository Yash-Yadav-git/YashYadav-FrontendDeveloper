import React from "react";
import { useContext } from "react";
import SpaceContext from "../context";

import NotFound from "./NotFound";

const DataGrid = ({ filterArray, isSearch }) => {
  const capsulesData = useContext(SpaceContext);

  const checkItems = () => {
    const dataToDisplay =
      filterArray.length > 0 ? (
        filterArray.map((x) => {
          return (
            <div className="rounded-lg bg-blue-400 border-red-50 border-2 text-left space-y-3 p-2 ">
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2UlMjBjYXBzdWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <h1 className="ml-2 text-5xl font-bold">{x.capsule_serial}</h1>
              <p className="ml-2 text-2xl">Capsule Id: {x.capsule_id}</p>
              <p className="ml-2 text-2xl">Capsule Type: {x.type}</p>
              <button className="rounded-lg p-3 font-medium bg-blue-300 m-3">
                Show More
              </button>
            </div>
          );
        })
      ) : (
        <NotFound />
      );

    return dataToDisplay;
  };

  return (
    <div className="container m-10 grid grid-cols-3 gap-10">
      {isSearch
        ? checkItems()
        : capsulesData.capsulesData.map((x) => {
            return (
              <div className="rounded-lg bg-blue-400 border-red-50 border-2 text-left space-y-3 p-2 ">
                <img
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2UlMjBjYXBzdWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <h1 className="ml-2 text-5xl font-bold">{x.capsule_serial}</h1>
                <p className="ml-2 text-2xl">Capsule Id: {x.capsule_id}</p>
                <p className="ml-2 text-2xl">Capsule Type: {x.type}</p>
                <button className="rounded-lg p-3 font-medium bg-blue-300 m-3">
                  Show More
                </button>
              </div>
            );
          })}
    </div>
  );
};

export default DataGrid;
