import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FiMoon, FiSun } from 'react-icons/fi'

import useDarkMode from '../hooks/use-dark-mode'

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()

    if (darkMode === undefined) return null

    return (
        <Toggle onClick={toggleDarkMode}>
            <div className={`wrapper`}>
                <FiMoon className={`icon moon`} />
                <FiSun className={`icon sun`} />
                <div className={`toggle-selector`} />
            </div>
        </Toggle>
    )
}

export default ThemeToggle

const Toggle = styled.button`
    ${tw`absolute top-0 right-0 mt-4 mr-4 border border-white rounded-full cursor-pointer w-10 z-10`}
    background: var(--brand-red);

    .wrapper {
        ${tw`p-1 relative`}

        .icon {
            ${tw`absolute top-0 mt-1 text-xs`}
            z-index: -1;

            &.moon {
                ${tw`left-0 ml-1 text-black`}
            }

            &.sun {
                ${tw`right-0 mr-1 text-white`}
            }
        }
    }

    .toggle-selector {
        ${tw`h-3 w-3 bg-white rounded-full`}
        margin-left: ${({ theme }) => theme.darkMode && `auto`};
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }
`
