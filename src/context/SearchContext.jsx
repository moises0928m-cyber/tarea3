import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [location, setLocation] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [filtros, setFiltros] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        location,
        setLocation,
        cantidad,
        setCantidad,
        filtros,
        setFiltros,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export function UseSearch() {
  return useContext(SearchContext);
}
