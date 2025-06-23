import { StrictMode, type PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <StrictMode>
            {children}
        </StrictMode>
    )
}