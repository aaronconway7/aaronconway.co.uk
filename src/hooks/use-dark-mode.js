import { useContext } from 'react'

import { DarkModeContext } from '../store/darkMode'

const useDarkMode = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return {
        darkMode,
        toggleDarkMode,
    }
}

export default useDarkMode
