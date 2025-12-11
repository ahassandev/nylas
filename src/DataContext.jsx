import { createContext } from "react";
import jsonData from "./data/data.json";

export const DataContext = createContext({
  data: jsonData,
});

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ data: jsonData }}>
      {children}
    </DataContext.Provider>
  );
}
