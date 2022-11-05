import { createContext, useEffect, useState } from "react";

const SpaceContext = createContext();
export const ContextProvider = ({ children }) => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <SpaceContext.Provider
      value={{
        capsules,
        loading,
        setCapsules,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};

export default SpaceContext;
