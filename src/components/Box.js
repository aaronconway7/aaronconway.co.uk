import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import useMobileMenu from '../hooks/use-mobile-menu'
import { menu } from './MobileMenu'
import LineThroughLink from './LineThroughLink'

const Box = () => {
    const { mobileMenuOpen, toggleMobileMenu } = useMobileMenu()
    return (
        <StyledBox whileHover={`hover`}>
            <motion.span
                className={`a w-12 h-12 text-center`}
                variants={{
                    hover: {
                        opacity: 1,
                    },
                }}
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? `X` : `A.`}
            </motion.span>
            {!mobileMenuOpen && (
                <motion.ul
                    className={`opacity-0 hidden md:grid grid-flow-col absolute right-0 mr-12 text-sm gap-8 bg-brand-grey h-full items-center px-8`}
                    variants={{
                        hover: {
                            opacity: 1,
                        },
                    }}
                >
                    {menu.map(m => (
                        <li
                            key={m.label}
                            className={`text-gray-100 text-opacity-25`}
                        >
                            {m.to ? (
                                <LineThroughLink to={m.to}>
                                    {m.label}
                                </LineThroughLink>
                            ) : (
                                <LineThroughLink
                                    href={m.href}
                                    target={`_blank`}
                                >
                                    {m.label}
                                </LineThroughLink>
                            )}
                        </li>
                    ))}
                </motion.ul>
            )}
        </StyledBox>
    )
}

export default Box

const StyledBox = styled(motion.div)`
    background-color: var(--brand-red);
    ${tw`fixed bottom-0 right-0 mb-5 mr-5 text-3xl cursor-pointer z-20 w-12 h-12 grid justify-center items-center`}

    .a {
        ${tw`font-bold opacity-0`}
    }
`
