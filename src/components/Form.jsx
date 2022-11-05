import React from "react";
import { useContext } from "react";
import { useState } from "react";
import SpaceContext from "../context";
import DataGrid from "./DataGrid";

const Form = () => {
  const [selectedElement, setSelectedElement] = useState("Status");
  const [serchTerm, setSearchTerm] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const { capsulesData } = useContext(SpaceContext);

  const handleOnSelect = (e) => {
    let temp = e.target.value;
    setSelectedElement(temp);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchFilter = (selectedElement) => {
    if (selectedElement === "Status") {
      return capsulesData.filter(
        (x) =>
          x.status.trim().toLowerCase() === serchTerm.trim().toLocaleLowerCase()
      );
    } else if (selectedElement === "Capsule Serial") {
      return capsulesData.filter(
        (x) =>
          x.capsule_serial.trim().toLowerCase() ===
          serchTerm.trim().toLocaleLowerCase()
      );
    } else if (selectedElement === "Type") {
      return capsulesData.filter(
        (x) =>
          x.type.trim().toLowerCase() === serchTerm.trim().toLocaleLowerCase()
      );
    }
  };

  const filterItems = () => {
    setFilterArray(searchFilter(selectedElement));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(true);
    filterItems();
    setSearchTerm("");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setIsSearch(false);
  };

  return (
    <div id="search" className="w-full bg-gray-600 m-4 space-y-4 text-left">
      <h1 className="text-7xl font-bold">Search Capsules</h1>
      <form className="w-full flex flex-col justify-evenly ">
        <div className="w-11/12 flex flex-row justify-between space-x-4">
          <div className="w-1/2 m-4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="search-type"
              onChange={handleOnSelect}
            >
              <option onSelect={handleOnSelect} value="Status">
                Status
              </option>
              <option onSelect={handleOnSelect} value="Capsule Serial">
                Capsule Serial
              </option>
              <option onSelect={handleOnSelect} value="Type">
                Type
              </option>
            </select>
          </div>
          <div className="w-1/2 m-4">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="input2"
              name="input-2"
              placeholder={selectedElement}
              onChange={handleOnChange}
              value={serchTerm}
            />
          </div>
        </div>
        <div className="w-11/12 flex flex-row justify-between space-x-4">
          <div className="w-1/2 m-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="w-1/2 m-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      {/* <form className="w-full flex flex-col justify-evenly p-3 space-y-6">
        <div className="w-11/12">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="search-type"
            onChange={handleOnSelect}
          >
            <option onSelect={handleOnSelect} value="Status">
              Status
            </option>
            <option onSelect={handleOnSelect} value="Capsule Serial">
              Capsule Serial
            </option>
            <option onSelect={handleOnSelect} value="Type">
              Type
            </option>
          </select>
        </div>
        <div className="w-11/12  flex justify-center items-center">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="input2"
            name="input-2"
            placeholder={selectedElement}
            onChange={handleOnChange}
            value={serchTerm}
          />
        </div>
        <button
          className="w-11/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="w-11/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleReset}
        >
          Reset
        </button>
      </form> */}
      <div className="flex justify-center items-center" id="data">
        <DataGrid filterArray={filterArray} isSearch={isSearch} />
      </div>
    </div>
  );
};

export default Form;
