import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const LineThroughLink = ({ children, ...rest }) => {
    if (rest.to) {
        return <AnimatedLink {...rest}>{children}</AnimatedLink>
    }
    return <AnimatedAnchor {...rest}>{children}</AnimatedAnchor>
}

export default LineThroughLink

export const AnimatedText = css`
    ${tw`relative`}

    &::after {
        ${tw`absolute block w-0 left-0`}
        height: 0.2em;
        content: '';
        top: calc(50% - 0.1em);
        transform: translate3d(-1%, 0, 0) scaleX(1);
        background: ${({ theme }) => (theme.darkMode ? `#fff` : `#000`)};
        opacity: 0.9;
        transition: width 0.3s ease, transform 0.3s ease-out 0.3s;
        transform-origin: right center;
    }

    &:hover {
        color: ${({ color }) => color} !important;

        &::after {
            width: 102%;
            transform: translate3d(-1%, 0, 0) scaleX(0);
        }
    }
`

export const AnimatedLink = styled(Link)`
    ${AnimatedText}
`

export const AnimatedAnchor = styled.a`
    ${AnimatedText}
`
