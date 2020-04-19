import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import FeaturedPost from '../components/FeaturedPost'

const Post = ({ data: { post } }) => {
    const { content } = post
    return (
        <StyledPost>
            <FeaturedPost data={post} selected={true} />
            <div className={`post-content`}>
                {documentToReactComponents(content.json)}
            </div>
        </StyledPost>
    )
}

export default Post

export const query = graphql`
    query($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            title
            caption
            featuredImage {
                fluid {
                    src
                }
            }
            date
            id
            content {
                json
                fields {
                    readingTime {
                        text
                    }
                }
            }
        }
    }
`

const StyledPost = styled.div`
    ${tw`text-left`}

    .post-content {
        ${tw`w-4/5 mx-auto py-20 max-w-lg leading-loose text-lg`}
    }
`
