import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import useMobileMenu from '../hooks/use-mobile-menu'

const StyledBox = styled(motion.div)`
    background-color: var(--brand-red);
    ${tw`fixed bottom-0 right-0 mb-5 mr-5 text-3xl cursor-pointer z-20 w-12 h-12 grid justify-center items-center`}

    .a {
        ${tw`font-bold opacity-0`}
    }
`

const Box = () => {
    const { mobileMenuOpen, toggleMobileMenu } = useMobileMenu()
    return (
        <StyledBox whileHover={`hover`} onClick={toggleMobileMenu}>
            <motion.span
                className={`a`}
                variants={{
                    hover: {
                        opacity: 1,
                    },
                }}
            >
                {mobileMenuOpen ? `X` : `A.`}
            </motion.span>
        </StyledBox>
    )
}

export default Box
