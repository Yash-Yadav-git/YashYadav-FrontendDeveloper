import React from "react";
import { useContext } from "react";
import SpaceContext from "../context";

const Pagination = () => {
  const pageNumbers = [];
  const { capsulePerPage, capsules, paginate, currentPage } =
    useContext(SpaceContext);

  for (let i = 1; i <= Math.ceil(capsules.length / capsulePerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (e, x) => {
    e.preventDefault();
    paginate(x);
  };
  return (
    <nav className="flex justify-center items-center bg-gray-600 mb-3">
      <ul className="flex  list-none">
        {pageNumbers.map((x) => (
          <li key={x}>
            <a
              onClick={(e) => handlePageChange(e, x)}
              href="!#"
              className="bg-white border-black text-black-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {x}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
