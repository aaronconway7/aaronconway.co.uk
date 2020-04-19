import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'twin.macro'
import Typical from 'react-typical'

import { DarkModeContext } from '../store/darkMode'

const typedStrings = [
    `Hello World!`,
    500,
    `Hi.`,
    750,
    `Yo.`,
    750,
    `Sup.`,
    750,
    `Wag1.`,
    750,
    `What'gwanin?`,
    500,
    `Hello.`,
    750,
    `What's up?`,
    500,
]

const Hero = () => {
    const { darkMode } = useContext(DarkModeContext)
    const data = useStaticQuery(graphql`
        {
            me: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            meLight: file(relativePath: { eq: "me-light.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <StyledHero id={`home`}>
            <Typical
                steps={typedStrings}
                loop={Infinity}
                wrapper={`span`}
                className={`typed-text`}
            />
            <Img
                fluid={
                    darkMode
                        ? data.me.childImageSharp.fluid
                        : data.meLight.childImageSharp.fluid
                }
                alt={`Aaron Conway`}
                className={`me-img`}
            />
        </StyledHero>
    )
}

export default Hero

const StyledHero = styled.section`
    ${tw`h-screen relative transition-none`}
    background-color: ${props => (props.theme.darkMode ? `#0e0e0e` : `white`)};

    .typed-text {
        ${tw`text-2xl sm:text-4xl absolute z-10 font-bold bottom-0 mb-24 sm:mb-32 right-0 text-right`}
        margin-right: calc(50%);
        ${({ theme }) => !theme.darkMode && tw`bg-white`};

        @media (min-width: 640px) {
            margin-right: calc(50% + 100px);
        }
    }

    .me-img {
        ${tw`h-full max-w-screen-md mx-auto`}
    }
`
