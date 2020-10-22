import React, { createContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(undefined)

    useEffect(() => {
        const root = window.document.documentElement
        const initialDarkMode =
            root.style.getPropertyValue('--initial-dark-mode') || true
        setDarkMode(initialDarkMode === `false` ? false : true)
    }, [])

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}
