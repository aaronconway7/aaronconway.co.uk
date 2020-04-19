import React from 'react'

import { DarkModeProvider } from './darkMode'
import { MobileMenuProvider } from './mobileMenu'

// Take in all of the providers and combine them
const ProviderComposer = ({ contexts, children }) => {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids,
            }),
        children
    )
}

// Create one Context Provider
const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer
            contexts={[<DarkModeProvider />, <MobileMenuProvider />]}
        >
            {children}
        </ProviderComposer>
    )
}

export default ContextProvider
