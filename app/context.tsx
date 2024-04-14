"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie } from "./data";
interface AppContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchMovies: Movie[];
  setSearchMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMovie: Props | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Props | null>>;
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface Props {
  times?: string[] | undefined;
  time?: string | undefined;
  day?: string | undefined;
  id?: number | undefined;
  seats?:
    | {
        id: number;
        selected: boolean;
        booked: boolean;
      }[]
    | undefined;
}

const appContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchMovies, setSearchMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<Props | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
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
        selectedMovie,
        setSelectedMovie,
        showNotification,
        setShowNotification,
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
