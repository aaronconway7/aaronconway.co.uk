import React, { useContext } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'twin.macro'
import { AnimatePresence } from 'framer-motion'

import { DarkModeContext } from '../store/darkMode'
import { MobileMenuContext } from '../store/mobileMenu'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Box from '../components/Box'
import MobileMenu from '../components/MobileMenu'
import ThemeToggle from '../components/ThemeToggle'

const GlobalStyle = createGlobalStyle`

    :root {
        --brand-red: #fa4b4a;
    }

    ::selection {
        background-color: var(--brand-red);
    }

    html {
        scroll-behavior: smooth;
        background-color: ${props => props.backgroundColor};
    }
    
    body {
        ${tw`min-h-screen text-gray-900 transition-colors duration-1000 ease-in-out`}
        ${({ theme }) =>
            theme.darkMode ? tw`text-gray-100` : tw`text-gray-900`}
        background-color: ${props =>
            props.theme.darkMode ? props.backgroundColor : `white`};
        font-family: 'Poppins', sans-serif;
        height: ${({ pageLocked }) => pageLocked && `100vh`};
        overflow: ${({ pageLocked }) => pageLocked && `hidden`};
        width: ${({ pageLocked }) => pageLocked && `100vw`};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${tw`font-bold`}
    }

    button {
        ${tw`outline-none!`}
    }
`

const StyledBody = styled.div`
    ${tw`min-h-screen grid relative`}
`

const Layout = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext)
    const { mobileMenuOpen } = useContext(MobileMenuContext)
    const { backgroundColor } = useSiteMetadata()

    return (
        <ThemeProvider theme={{ darkMode }}>
            <GlobalStyle
                backgroundColor={backgroundColor}
                pageLocked={mobileMenuOpen}
            />
            <StyledBody>
                <ThemeToggle />
                <AnimatePresence>
                    {mobileMenuOpen && <MobileMenu />}
                </AnimatePresence>
                <main>{children}</main>
                <Box />
            </StyledBody>
        </ThemeProvider>
    )
}

export default Layout
