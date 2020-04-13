import { useEffect } from 'react'

import useLocalStorage from './use-local-storage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(`darkMode`, false)

    useEffect(() => {
        setDarkMode(darkMode)
    }, [darkMode, setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return {
        darkMode,
        toggleDarkMode,
    }
}

export default useDarkMode
