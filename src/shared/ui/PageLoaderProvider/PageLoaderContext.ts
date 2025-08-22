import { createContext } from "react";

export interface PageLoaderContextProps {
  toggleLoading: () => void;
  isLoading: boolean;
}

export const PageLoaderContext = createContext<PageLoaderContextProps>(
  {} as PageLoaderContextProps,
);
