import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

import Emoji from './Emoji'

const FeaturedPost = ({ data: featuredPost, selected }) => (
    <StyledFeaturedPost>
        <Img
            className={`featured-image`}
            fluid={featuredPost.featuredImage.fluid}
            alt={featuredPost.title}
        />
        <div className={`content`}>
            {selected && <small className={`date`}>{featuredPost.date}</small>}
            <h1 className={`title`}>{featuredPost.title}</h1>
            {selected && (
                <>
                    <p className={`caption`}>{featuredPost.caption}</p>
                    <span className={`reading-time`}>
                        <Emoji emoji={`⏰`} label={`clock`} />
                        <span className={`text`}>
                            {featuredPost.content.fields.readingTime.text}
                        </span>
                    </span>
                </>
            )}
            {!selected && (
                <Link to={`/blog/${featuredPost.slug}`}>
                    <motion.span
                        className={`read-post`}
                        whileHover={`hover`}
                        variants={{
                            hover: {
                                x: 10,
                            },
                        }}
                    >
                        Read Post{' '}
                        <motion.div
                            className={`motion-emoji`}
                            variants={{
                                hover: {
                                    x: 75,
                                    opacity: 0,
                                },
                            }}
                        >
                            <Emoji emoji={`🚀`} label={`rocket`} />
                        </motion.div>
                    </motion.span>
                </Link>
            )}
        </div>
    </StyledFeaturedPost>
)

export default FeaturedPost

const StyledFeaturedPost = styled.div`
    ${tw`relative grid content-center py-20`}
    min-height: 40vh;

    .featured-image {
        ${tw`absolute! top-0 left-0 w-full h-full opacity-25`}
    }

    .content {
        ${tw`grid w-4/5 max-w-screen-md mx-auto z-10`}

        .date {
            ${tw`opacity-50`}
        }

        .title {
            ${tw`text-5xl`}
        }

        .caption {
            ${tw`text-3xl font-light opacity-75`}
        }

        .reading-time {
            ${tw`text-sm`}

            .text {
                ${tw`opacity-50`}
            }
        }

        .read-post {
            ${tw`font-bold py-4 px-10 rounded text-sm text-white! flex overflow-hidden`}
            background-color: var(--brand-red);
            width: max-content;

            .motion-emoji {
                ${tw`ml-2`}
            }
        }
    }
`
