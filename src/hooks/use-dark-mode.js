import { useContext } from 'react'

import { DarkModeContext } from '../store/darkMode'

const useDarkMode = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            // Persist it on update
            window.localStorage.setItem(`darkMode`, !prevMode)
            return !prevMode
        })
    }

    return {
        darkMode,
        toggleDarkMode,
    }
}

export default useDarkMode
