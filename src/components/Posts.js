import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import Emoji from './Emoji'

const Posts = ({ data: posts }) => (
    <StyledPosts>
        {posts.map(({ node: post }) => (
            <li className={`post`} key={post.slug}>
                <span className={`date`}>{post.date}</span>
                <Link to={`/blog/${post.slug}`} className={`title`}>
                    {post.title}
                </Link>
                <p className={`excerpt`}>{post.content.fields.excerpt}</p>
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
    ${tw`grid gap-10`}

    .post {
        ${tw`grid`}

        .date {
            ${tw`text-xs opacity-50`}
        }

        .title {
            ${tw`font-semibold text-2xl transition-colors duration-200 ease-in-out`}
                :hover {
                color: var(--brand-red);
            }
        }

        .excerpt {
            ${tw`opacity-75`}
        }

        .reading-time {
            ${tw`text-xs mt-2`}

            .text {
                ${tw`opacity-50`}
            }
        }
    }
`
