import { createContext } from "react";

export type PageLoaderContextProps = {
  toggleLoading: () => void;
  isLoading: boolean;
}

export const PageLoaderContext = createContext<PageLoaderContextProps>({} as PageLoaderContextProps);