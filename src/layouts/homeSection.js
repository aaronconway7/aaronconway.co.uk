import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledHomeSectionLayout = styled.div`
    ${tw`max-w-screen-lg w-4/5 mx-auto py-24 md:py-32`}

    .title {
        ${tw`opacity-50 font-normal text-sm`}
    }

    .text {
        ${tw`text-3xl md:text-5xl font-bold`}

        .red {
            color: var(--brand-red);
        }
    }
`
const HomeSectionLayout = ({ children }) => (
    <StyledHomeSectionLayout>{children}</StyledHomeSectionLayout>
)

export default HomeSectionLayout
