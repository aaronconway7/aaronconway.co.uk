import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Emoji from './Emoji'
import LineThroughLink from './LineThroughLink'

const Posts = ({ data: posts }) => (
    <StyledPosts>
        {posts.map(({ node: post }) => (
            <li className={`post`} key={post.slug}>
                <span className={`date`}>{post.date}</span>
                <LineThroughLink to={`/blog/${post.slug}`} className={`title`}>
                    {post.title}
                </LineThroughLink>
                <span className={`reading-time`}>
                    <Emoji emoji={`🕑`} label={`clock`} />
                    <span className={`text`}>
                        {post.content.fields.readingTime.text}
                    </span>
                </span>
            </li>
        ))}
    </StyledPosts>
)

export default Posts

const StyledPosts = styled.ul`
    ${tw`grid gap-8`}

    .post {
        ${tw`grid`}

        .date {
            ${tw`text-xs opacity-50`}
        }

        .title {
            ${tw`font-semibold text-2xl`}
            width: max-content;
        }

        .caption {
            ${tw`opacity-75`}
        }

        .reading-time {
            ${tw`text-xs`}

            .text {
                ${tw`opacity-50`}
            }
        }
    }
`
