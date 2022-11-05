import React from "react";

const Modal = ({ capsule, isModalOpen, onClose }) => {
  // console.log(onClose);
  if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="flex flex-col bg-white rounded-lg m-10 p-2 bg-opacity-30">
        <span className="flex flex-row space-x-3">
          <p>Capsule Serial :</p>
          <p>{capsule.capsule_serial}</p>
        </span>
        <span className="flex flex-row space-x-4">
          <p>Capsule id :</p>
          <p>{capsule.capsule_id}</p>
        </span>
        <span className="flex flex-row space-x-4">
          <p>Status :</p>
          <p>{capsule.status}</p>
        </span>
        <span className="flex flex-row space-x-4 flex-wrap">
          <p>Original Launch :</p>
          <p>{capsule.original_launch}</p>
        </span>
        <span className="flex flex-row space-x-4">
          <p>original_launch_unix</p>
          <p>{capsule.original_launch_unix}</p>
        </span>
        <button className="bg-blue-500 rounded-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
