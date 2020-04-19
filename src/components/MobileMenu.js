import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import LineThroughLink from './LineThroughLink'
import useMobileMenu from '../hooks/use-mobile-menu'

const StyledMobileMenu = styled(motion.nav)`
    ${tw`fixed top-0 left-0 w-screen h-screen overflow-auto z-20`}
    background-color: ${({ theme }) =>
        theme.darkMode
            ? `rgba(24, 24, 24, 0.975)`
            : `rgba(232, 232, 232, 0.975)`};

    ul {
        li {
            ${tw`text-center text-3xl font-bold border-b`}
            border-color: ${({ theme }) =>
                theme.darkMode
                    ? `rgba(238, 238, 238, 0.2)`
                    : `rgba(17,17,17,0.2)`};

            a,
            &:last-child {
                ${tw`p-8`}
            }

            a {
                ${tw`block transition duration-200 ease-in-out`};
                color: ${({ theme }) =>
                    theme.darkMode
                        ? `rgba(238, 238, 238, 0.2)`
                        : `rgba(17,17,17,0.2)`};

                &:hover {
                    color: var(--brand-red);
                }
            }

            &:last-child {
                ${tw`border-b-0`}
                color: var(--brand-red);
            }
        }
    }
`

const menu = [
    {
        label: `Home`,
        to: `/#home`,
    },
    {
        label: `Intro`,
        to: `/#intro`,
    },
    {
        label: `Projects`,
        to: `/#projects`,
    },
    {
        label: `Social`,
        to: `/#social`,
    },
    {
        label: `Friends`,
        to: `/#friends`,
    },
    {
        label: `Blog`,
        to: `/blog`,
    },
]

const MobileMenu = () => {
    const { toggleMobileMenu } = useMobileMenu()

    return (
        <StyledMobileMenu
            initial={{ y: `-100%` }}
            animate={{ y: 0 }}
            exit={{ y: `-100%` }}
        >
            <ul>
                {menu.map(item => (
                    <li key={item.label}>
                        {item.to ? (
                            <LineThroughLink
                                className={`link`}
                                to={item.to}
                                onClick={toggleMobileMenu}
                            >
                                {item.label}
                            </LineThroughLink>
                        ) : (
                            <LineThroughLink
                                className={`link`}
                                href={item.href}
                                onClick={toggleMobileMenu}
                            >
                                {item.label}
                            </LineThroughLink>
                        )}
                    </li>
                ))}
                <li>A.</li>
            </ul>
        </StyledMobileMenu>
    )
}

export default MobileMenu
