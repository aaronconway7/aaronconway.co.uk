import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import { FiCornerDownLeft } from 'react-icons/fi'

import Emoji from '../components/Emoji'
import LineThroughLink from '../components/LineThroughLink'
import SEO from '../components/SEO'

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>,
        [MARKS.ITALIC]: text => <i>{text}</i>,
    },
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <div className={`image`}>
                <img
                    src={`${node.data.target.fields.file[`en-US`].url}?w=600`}
                    alt={node.data.target.fields.title[`en-US`]}
                />
                {node.data.target.fields.description && (
                    <span className={`caption`}>
                        {node.data.target.fields.description[`en-US`]}
                    </span>
                )}
            </div>
        ),
        [INLINES.HYPERLINK]: (node, children) => (
            <LineThroughLink href={node.data.uri} target={`_blank`}>
                {children}
            </LineThroughLink>
        ),
    },
    renderText: text =>
        text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const Post = ({ data: { post } }) => {
    const { content } = post
    return (
        <StyledPost>
            <SEO title={`Aaron Conway's Blog | ${post.title}`} />
            <Link to={`blog`} className={`back`}>
                <FiCornerDownLeft />
            </Link>
            <div className={`header`}>
                <small className={`date`}>{post.date}</small>
                <h1 className={`title`}>{post.title}</h1>
                <p className={`caption`}>{post.caption}</p>
                <span className={`reading-time`}>
                    <Emoji emoji={`⏰`} label={`clock`} />
                    <span className={`text`}>
                        {post.content.fields.readingTime.text}
                    </span>
                </span>
            </div>
            <div className={`featured-image`}>
                <Img
                    fluid={post.featuredImage.fluid}
                    alt={post.featuredImage.title}
                    className={`image`}
                />
                {post.featuredImage.description && (
                    <span className={`caption`}>
                        {post.featuredImage.description}
                    </span>
                )}
            </div>
            <div className={`post-content`}>
                {documentToReactComponents(content.json, options)}
            </div>
            <img
                class={`author-avatar`}
                src={`https://unavatar.now.sh/aaronconway7`}
                alt={`Author Avatar`}
            />
            <Link to={`/blog`} className={`return-blog-home`}>
                Return to Blog Home
            </Link>
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
                title
                description
                fluid(maxWidth: 1000) {
                    ...GatsbyContentfulFluid_withWebp
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
    ${tw`text-left relative`}

    .back {
        ${tw`absolute top-0 left-0 mt-4 ml-4 text-2xl opacity-25 hover:opacity-75 transition-opacity duration-200 ease-in-out`}
    }

    .header {
        ${tw`w-4/5 mx-auto py-24 md:py-32 max-w-3xl`}

        .date {
            ${tw`opacity-50`}
        }

        .title {
            ${tw`text-5xl md:text-6xl`}
        }

        .caption {
            ${tw`text-3xl font-light opacity-75`}
        }

        .reading-time {
            ${tw`text-sm mt-2 inline-block`}

            .text {
                ${tw`opacity-50`}
            }
        }
    }

    .featured-image,
    .post-content {
        .caption {
            ${tw`block text-center p-4 opacity-50 italic text-sm`}
        }
    }

    .post-content {
        ${tw`w-4/5 mx-auto py-20 max-w-xl leading-loose text-lg md:text-xl`}

        &:last-child {
            ${tw`mb-0!`}
        }

        h2 {
            ${tw`text-3xl`}
        }

        a {
            color: var(--brand-red);
        }

        hr {
            ${tw`opacity-25 py-4`}
            ${theme => !theme.darkMode && tw`border-black`}
        }

        ul {
            list-style: circle;
            p {
                ${tw`m-0`}
            }
        }

        p,
        .image,
        ul {
            ${tw`mb-10`}
        }

        p {
            &:last-child {
                ${tw`mb-0`}
            }
        }
    }

    .author-avatar {
        ${tw`rounded-full mx-auto h-40 mb-32`}
    }

    .return-blog-home {
        ${tw`block py-20 text-4xl font-bold text-center border-t-2 transition-colors duration-300 ease-in-out hover:text-white`}

        &:hover {
            background-color: var(--brand-red);
        }
    }
`
