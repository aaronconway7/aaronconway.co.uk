import React, { createContext } from 'react'

import useDarkMode from '../hooks/use-dark-mode'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const { darkMode, toggleDarkMode } = useDarkMode()

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}
