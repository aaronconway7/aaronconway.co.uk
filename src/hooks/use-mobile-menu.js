import { useContext } from 'react'

import { MobileMenuContext } from '../store/mobileMenu'

const useMobileMenu = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useContext(MobileMenuContext)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState)
    }

    return {
        mobileMenuOpen,
        toggleMobileMenu,
    }
}

export default useMobileMenu
