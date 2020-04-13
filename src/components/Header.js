import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import ThemeToggle from './ThemeToggle'
import Favicon from '../assets/img/favicon.png'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import routes from '../constants/routes'

const StyledHeader = styled.header`
    ${tw`border-b py-2 px-4 flex items-center justify-between`}

    .app-title {
        ${tw`flex items-center font-bold opacity-100 no-underline!`}

        .favicon {
            ${tw`h-4`}
        }

        .text {
            ${tw`ml-2`}
        }
    }
`

const Header = () => {
    const metadata = useSiteMetadata()
    return (
        <StyledHeader>
            <Link to={routes.home} className={`app-title`}>
                <img src={Favicon} alt={`Favicon`} className={`favicon`} />
                <span className={`text`}>{metadata.title}</span>
            </Link>
            <ThemeToggle />
        </StyledHeader>
    )
}

export default Header
