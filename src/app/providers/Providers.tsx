import { StrictMode, type PropsWithChildren } from "react";
import { persistor, store } from "@shared/model";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "@app/theme";
import { PageLoaderProvider } from "@shared/ui";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StrictMode>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <PageLoaderProvider>
              <ToastContainer />
              {children}
            </PageLoaderProvider>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </StrictMode>
  );
};
