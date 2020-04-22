import React, { useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Colcade from 'colcade'

const Masonry = ({ cols = 1, mdCols, lgCols, gutter, children }) => {
    const maxCols = lgCols || mdCols || cols
    useEffect(() => {
        if (window) {
            new Colcade('.masonry-container', {
                columns: '.masonry-col',
                items: '.masonry-item',
            })
        }
    }, [])
    return (
        <StyledMasonry className={`masonry-container`}>
            {[...Array(maxCols)].map((col, i) => (
                <StyledMasonryCol
                    className={`masonry-col`}
                    index={i + 1}
                    cols={cols}
                    mdCols={mdCols}
                    lgCols={lgCols}
                    gutter={gutter}
                ></StyledMasonryCol>
            ))}
            {children.map(child => (
                <div className={`masonry-item`}>{child}</div>
            ))}
        </StyledMasonry>
    )
}

export default Masonry

const StyledMasonry = styled.div`
    ${tw`flex`}
`

const StyledMasonryCol = styled.div`
    margin-left: ${({ gutter }) => `${gutter}px`};
    flex-grow: 1;
    ${({ index, cols }) => index > cols && tw`hidden`}
    ${({ index, mdCols }) => index <= mdCols && tw`md:block`}
    ${({ index, lgCols }) => index <= lgCols && tw`lg:block`}
    &:first-of-type {
        ${tw`ml-0`}
    }
    .masonry-item {
        margin-top: ${({ gutter }) => `${gutter}px`};
        &:first-child {
            ${tw`mt-0`}
        }
    }
`
