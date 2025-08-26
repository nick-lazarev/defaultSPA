import { useMemo, useState, type PropsWithChildren } from "react";
import { PageLoaderContext } from "./PageLoaderContext";
import { Loader } from "../Loader";

export const PageLoaderProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      isLoading,
      toggleLoading: () => {
        setLoading((prevState) => !prevState);
      },
    }),
    [isLoading],
  );

  return (
    <PageLoaderContext.Provider value={value}>
      <Loader isLoading={isLoading} />

      {children}
    </PageLoaderContext.Provider>
  );
};
