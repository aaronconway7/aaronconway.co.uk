import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Emoji from '../components/Emoji'
import routes from '../constants/routes'

const StyledHome = styled.div`
    .leo-img {
        ${tw`mt-4`}
    }
`

const Home = () => {
    const data = useStaticQuery(graphql`
        {
            leo: file(relativePath: { eq: "leo.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <StyledHome>
            <SEO title={`Home`} />
            <h1>
                Hello World! <Emoji emoji={`👋`} label={`Waving Hand`} />
            </h1>
            <p>Welcome to your new Gatsby site.</p>
            <Link to={routes.page2}>Go to page 2</Link>
            <Img
                fluid={data.leo.childImageSharp.fluid}
                alt={`Leo`}
                className={`leo-img`}
            />
        </StyledHome>
    )
}

export default Home
