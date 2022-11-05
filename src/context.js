import { createContext, useEffect, useState } from "react";

const SpaceContext = createContext();
export const ContextProvider = ({ children }) => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPgae, setCurrentPage] = useState(1);
  const [capsulePerPage] = useState(6);

  const fetchCapsules = async () => {
    setLoading(true);
    const response = await fetch("https://api.spacexdata.com/v3/capsules");
    const json = await response.json();
    setCapsules(json);
    setLoading(false);
  };
  useEffect(() => {
    fetchCapsules();
  }, []);

  const indexOfLastcapsule = currentPgae * capsulePerPage;
  const indexOfFirstcapsule = indexOfLastcapsule - capsulePerPage;
  const capsulesData = capsules.slice(indexOfFirstcapsule, indexOfLastcapsule);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <SpaceContext.Provider
      value={{
        capsules,
        loading,
        setCapsules,
        capsulesData,
        capsulePerPage,
        currentPgae,
        paginate,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};

export default SpaceContext;
