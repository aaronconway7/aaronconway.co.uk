import React, { useContext } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'twin.macro'

import { DarkModeContext } from '../store/darkMode'
import Header from '../components/Header'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
    body {
        ${tw`min-h-screen text-gray-900`}
        ${({ theme }) =>
            theme.darkMode
                ? tw`text-gray-100 bg-gray-900`
                : tw`text-gray-900 bg-gray-100`}
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${tw`font-bold`}
    }

    a {
        ${tw`opacity-50 transition duration-300 ease-in-out hover:opacity-75 hover:underline`}
    }

    button {
        ${tw`outline-none!`}
    }
`

const StyledBody = styled.div`
    ${tw`min-h-screen grid`}
    grid-template-rows: auto 1fr auto;

    main {
        ${tw`text-center w-10/12 max-w-3xl mx-auto py-24`}
    }

    footer {
        ${tw`row-start-3 row-end-4`}
    }
`

const Layout = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <ThemeProvider theme={{ darkMode }}>
            <GlobalStyle />
            <StyledBody>
                <Header />
                <main>{children}</main>
                <Footer />
            </StyledBody>
        </ThemeProvider>
    )
}

export default Layout
