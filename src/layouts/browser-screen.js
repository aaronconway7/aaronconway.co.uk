import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const BrowserScreen = ({ children }) => (
    <StyledBrowser className={`browser`}>
        <div className={`browser-header`}>
            <div className={`close`}></div>
            <div className={`minimise`}></div>
            <div className={`maximise`}></div>
            <div className={`search`}></div>
        </div>
        {children}
    </StyledBrowser>
)

export default BrowserScreen

const StyledBrowser = styled.div`
    ${tw`shadow-2xl`}

    .browser-header {
        ${tw`grid gap-2 items-center p-3`}
        border-radius: 5px 5px 0 0;
        grid-auto-flow: column;
        grid-template-columns: max-content max-content max-content 1fr;
        background-color: ${({ theme }) =>
            theme.darkMode ? `#2f2f2f` : `#e0e0e0`};
        color: #ececec;

        .close,
        .minimise,
        .maximise,
        .search {
            ${tw`transition duration-300 ease-in-out`}
        }

        .close,
        .minimise,
        .maximise {
            ${tw`w-3 h-3 rounded-full`}
            background-color: #181818;
        }
        .close {
            &:hover {
                background-color: #ff4746;
            }
        }
        .minimise {
            &:hover {
                background-color: #ffbe00;
            }
        }
        .maximise {
            &:hover {
                background-color: #00d644;
            }
        }
        .search {
            ${tw`bg-black opacity-25 hover:opacity-50 w-full h-4 rounded`}
        }
    }
    .screen {
        ${tw`h-auto w-full`}
    }
`
