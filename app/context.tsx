"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Movie } from "./data";
interface AppContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchMovies: Movie[];
  setSearchMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  loading:boolean;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

const appContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchMovies, setSearchMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);
  return (
    <appContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchMovies, 
        setSearchMovies,
        loading, 
        setLoading,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export const useGlobalContext = (): AppContextType => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
