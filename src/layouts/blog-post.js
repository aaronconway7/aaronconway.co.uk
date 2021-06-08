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
import useDarkMode from '../hooks/use-dark-mode'

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

const Post = ({ data }) => {
    const { post, avatar, signatureLight, signatureDark } = data
    const { darkMode } = useDarkMode()
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
                {documentToReactComponents(post.content.json, options)}
            </div>
            <Img
                className={`author-signature`}
                fluid={
                    darkMode
                        ? signatureLight.childImageSharp.fluid
                        : signatureDark.childImageSharp.fluid
                }
                alt={`Aaron Conway Signature`}
            />
            <Img
                className={`author-avatar`}
                fluid={avatar.childImageSharp.fluid}
                alt={`Aaron Conway Avatar`}
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
                fluid(maxWidth: 3000) {
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
        signatureLight: file(relativePath: { eq: "signature-light.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        signatureDark: file(relativePath: { eq: "signature-dark.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
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

    .author-signature,
    .author-avatar {
        ${tw`mx-auto h-40 w-40`}
    }

    .author-signature {
        ${tw`mb-12`}
    }

    .author-avatar {
        ${tw`rounded-full mb-32`}
    }

    .return-blog-home {
        ${tw`block py-20 text-4xl font-bold text-center border-t-2 transition-colors duration-300 ease-in-out hover:text-white`}

        &:hover {
            background-color: var(--brand-red);
        }
    }
`
