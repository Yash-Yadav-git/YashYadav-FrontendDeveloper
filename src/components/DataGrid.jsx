import React from "react";
import { useState } from "react";
import { useContext } from "react";
import SpaceContext from "../context";
import Modal from "./Modal";
import NotFound from "./NotFound";

const DataGrid = ({ filterArray, isSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const capsulesData = useContext(SpaceContext);
  const [modalData, setModalData] = useState([]);

  const getData = (capsule) => {
    setModalData(capsule);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkItems = () => {
    const dataToDisplay =
      filterArray.length > 0 ? (
        filterArray.map((x) => {
          return (
            <div className="flex flex-col justify-center rounded-lg bg-blue-400 text-left space-y-3">
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2UlMjBjYXBzdWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <h1 className="ml-2 text-5xl font-bold">{x.capsule_serial}</h1>
              <p className="ml-2 text-2xl">Capsule Id: {x.capsule_id}</p>
              <p className="ml-2 text-2xl">Capsule Type: {x.type}</p>
              <div className="p-2 pt-0">
                <button
                  className="rounded-lg p-3 font-medium bg-blue-500 hover:bg-blue-700"
                  onClick={() => {
                    setIsModalOpen(true);
                    getData(x);
                  }}
                >
                  Show More
                </button>
              </div>
              <Modal
                capsule={modalData}
                isModalOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          );
        })
      ) : (
        <NotFound />
      );

    return dataToDisplay;
  };

  return (
    <div className="grid-cols-1 md:grid-cols-2 m-10 grid lg:grid-cols-3 gap-4">
      {isSearch
        ? checkItems()
        : capsulesData.capsulesData.map((x) => {
            return (
              <div className="flex flex-col justify-center rounded-lg bg-blue-400 text-left space-y-3">
                <img
                  className="rounded-lg p-0"
                  src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2UlMjBjYXBzdWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <h1 className="ml-2 text-5xl font-bold">{x.capsule_serial}</h1>
                <p className="ml-2 text-2xl">Capsule Id: {x.capsule_id}</p>
                <p className="ml-2 text-2xl">Capsule Type: {x.type}</p>
                <div className="p-2 pt-0">
                  <button
                    className="rounded-lg p-3 font-medium bg-blue-500 hover:bg-blue-700"
                    onClick={() => {
                      setIsModalOpen(true);
                      getData(x);
                    }}
                  >
                    Show More
                  </button>
                </div>

                <Modal
                  capsule={modalData}
                  isModalOpen={isModalOpen}
                  onClose={closeModal}
                />
              </div>
            );
          })}
    </div>
  );
};

export default DataGrid;
