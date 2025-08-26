import { StrictMode, Suspense, type PropsWithChildren } from "react";
import { persistor, store } from "@shared/model";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "@app/theme";
import { PageLoaderProvider } from "@shared/ui";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Loader } from "@shared/ui/Loader";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StrictMode>
      <Suspense fallback={<Loader isLoading={true} />}>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </Suspense>
    </StrictMode>
  );
};
