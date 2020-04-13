import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Emoji from './Emoji'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const StyledFooter = styled.footer`
    ${tw`p-4 border-t text-center md:text-right`};
`

const Footer = () => {
    const metadata = useSiteMetadata()
    return (
        <StyledFooter>
            © {new Date().getFullYear()}, Made with{' '}
            <Emoji emoji={`❤️`} label={`heart`} /> by
            {` `}
            <a
                href={`https://aaronconway.co.uk`}
                target={`_blank`}
                rel={`noopener`}
            >
                {metadata.author}
            </a>
        </StyledFooter>
    )
}

export default Footer
