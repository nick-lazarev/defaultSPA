import { PageLoaderContext } from "@shared/ui";
import { useContext } from "react";

export const usePageLoaderContext = () => {
  return useContext(PageLoaderContext);
};
