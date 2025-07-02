import { StrictMode, type PropsWithChildren } from "react"
import { store } from '../../shared/model/store'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from "@app/theme"

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <StrictMode>
            <StoreProvider store={store}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </StoreProvider>
        </StrictMode>
    )
}