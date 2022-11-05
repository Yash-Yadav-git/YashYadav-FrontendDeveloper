import React, { useContext } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import SpaceContext from "./context";
import "./index.css";

function App() {
  const { loading } = useContext(SpaceContext);

  return (
    <div className="w-full h-screen bg-gray-600">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-full h-screen overflow-x-hidden">
          <Banner />
          <Form />
        </div>
      )}
    </div>
  );
}

export default App;
