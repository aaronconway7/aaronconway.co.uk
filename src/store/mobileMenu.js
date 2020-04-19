import React, { useState, createContext } from 'react'

export const MobileMenuContext = createContext()

export const MobileMenuProvider = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <MobileMenuContext.Provider
            value={{
                mobileMenuOpen,
                setMobileMenuOpen,
            }}
        >
            {children}
        </MobileMenuContext.Provider>
    )
}
