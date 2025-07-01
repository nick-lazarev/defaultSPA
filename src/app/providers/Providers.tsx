import { StrictMode, type PropsWithChildren } from "react"
import { store } from '../../shared/model/store'
import { Provider as StoreProvider } from 'react-redux'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <StrictMode>
            <StoreProvider store={store}>
                {children}
            </StoreProvider>
        </StrictMode>
    )
}