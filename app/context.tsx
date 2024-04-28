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
  selectedMovie: Props | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Props | null>>;
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;

  meta: Meta;
  setMeta: React.Dispatch<React.SetStateAction<Meta>>;
}
interface Meta {
  pageCount: number;
  page: number;
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
  const [selectedMovie, setSelectedMovie] = useState<Props | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [meta, setMeta] = useState<Meta>({
    page: 1,
    pageCount: 10,
  });
  return (
    <appContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchMovies,
        setSearchMovies,
        selectedMovie,
        setSelectedMovie,
        showNotification,
        setShowNotification,
        meta,
        setMeta,
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
