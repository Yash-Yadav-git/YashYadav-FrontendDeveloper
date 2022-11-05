import React, { useContext } from "react";
import Pagination from "./components/Pagination";
import Banner from "./components/Banner";
import Form from "./components/Form";
import SpaceContext from "./context";
import "./index.css";
import Loading from "./components/Loading";

function App() {
  const { loading } = useContext(SpaceContext);

  return (
    <div className="w-full h-screen bg-gray-600">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-screen overflow-x-hidden">
          <Banner />
          <Form />
          <Pagination />
        </div>
      )}
    </div>
  );
}

export default App;
