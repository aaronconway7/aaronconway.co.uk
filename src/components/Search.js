import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FaAlgolia } from 'react-icons/fa'

import { connectSearchBox } from 'react-instantsearch-dom'

const Search = connectSearchBox(({ refine, ...rest }) => (
    <StyledSearch>
        <input
            type={`search`}
            placeholder={`Search...`}
            aria-label={`Search`}
            onChange={e => refine(e.target.value)}
            {...rest}
        />
        <a
            href={`https://algolia.com`}
            className={`powered-by`}
            target={`_blank`}
        >
            Powered by <FaAlgolia className={`icon`} />
        </a>
    </StyledSearch>
))

export default Search

const StyledSearch = styled.form`
    ${tw`grid gap-2 mb-10`}

    input {
        ${tw`rounded-lg px-6 py-4 shadow-lg outline-none`}
        background-color: ${({ theme }) =>
            theme.darkMode && `rgba(255,255,255,0.1)`};

        &::placeholder {
            ${tw`opacity-50`}
        }
    }

    .powered-by {
        ${tw`flex items-center ml-auto text-xs opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out`}

        .icon {
            ${tw`ml-1`}
            color: #5568ff;
        }
    }
`
