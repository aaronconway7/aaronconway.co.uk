import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Posts from '../components/Posts'
import FeaturedPost from '../components/FeaturedPost'

const Home = () => {
    const data = useStaticQuery(graphql`
        {
            posts: allContentfulPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        slug
                        title
                        date
                        featuredImage {
                            fluid(maxWidth: 1000) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        content {
                            fields {
                                excerpt
                                readingTime {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <StyledHome>
            <FeaturedPost data={data.posts.edges[0].node} />
            <div className={`posts`}>
                <Posts data={data.posts.edges} />
            </div>
        </StyledHome>
    )
}

export default Home

const StyledHome = styled.div`
    .posts {
        ${tw`w-4/5 mx-auto py-32 max-w-lg`}
    }
`
