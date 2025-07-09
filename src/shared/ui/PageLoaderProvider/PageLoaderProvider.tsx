import { Backdrop, CircularProgress } from "@mui/material"
import { useMemo, useState, type PropsWithChildren } from "react"
import { PageLoaderContext } from "./PageLoaderContext";

export const PageLoaderProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading ] = useState(false);


  const value = useMemo(() => ({
    isLoading,
    toggleLoading: () => setLoading((prevState) => !prevState)
  }), [isLoading]);

  return (
    <PageLoaderContext.Provider value={value}>
      <Backdrop
        sx={(theme) => ({ color: 'white', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {children}
    </PageLoaderContext.Provider>
  )
}