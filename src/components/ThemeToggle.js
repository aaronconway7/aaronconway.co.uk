import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import { DarkModeContext } from '../store/darkMode'
import Emoji from '../components/Emoji'

const Toggle = styled.button`
    ${tw`border-2 border-white rounded-full flex cursor-pointer w-20 px-2 justify-between items-center text-white overflow-hidden`}
    background: ${({ theme }) =>
        theme.darkMode
            ? `linear-gradient(#091236, #1E215D)`
            : `linear-gradient(#39598A, #79D7ED)`};

    .icon {
        ${tw`transform transition duration-300 ease-linear text-2xl`}
    }

    .light {
        ${({ theme }) =>
            theme.darkMode ? tw`translate-y-8` : tw`translate-y-0`}
    }

    .dark {
        ${({ theme }) =>
            theme.darkMode ? tw`translate-y-0` : tw`-translate-y-8`}
    }
`

const ThemeToggle = () => {
    const { toggleDarkMode } = useContext(DarkModeContext)

    return (
        <Toggle onClick={toggleDarkMode}>
            <span className={`icon light`}>
                <Emoji emoji={`🌞`} label={`Sun`} />
            </span>
            <span className={`icon dark`}>
                <Emoji emoji={`🌚`} label={`Moon`} />
            </span>
        </Toggle>
    )
}

export default ThemeToggle
